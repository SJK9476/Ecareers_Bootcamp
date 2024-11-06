from flask import Flask, jsonify, render_template
from flask_mysqldb import MySQL
from flask import request
import mysql.connector
from flask_cors import cross_origin

app = Flask(__name__)

def create_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Jasmin4694!',
        database='trivia_quiz'
    )
    return connection




# Routes to each page (quiz options, quiz, and results)

@app.route('/', methods=['GET'])
def renderQuizOptions():
    return render_template('index.html')

@app.route('/quiz.html', methods=['GET'])
def renderQuiz():
    return render_template('quiz.html')

# Below is the API to retreive the possible quiz options


@app.route('/api/quizzes', methods=['GET'])
@cross_origin(origins="*")
def get_quizzes():
    connection = create_connection()
    cur = connection.cursor(dictionary=True)
    cur.execute('''SELECT * FROM quizzes''')
    data = cur.fetchall()
    cur.close()
    return jsonify(data);


# Below is the API to retrieve the correct questions and corresponding answer choices for the quiz selected

@app.route('/api/quizzes/<int:quiz_id>/questions', methods=['GET'])
@cross_origin(origins="*")
def get_questions(quiz_id):
    connection = create_connection()
    cur = connection.cursor(dictionary=True)
    cur.execute('''SELECT
                        Q.id AS question_id,
                        Q.question_text,
                        C.id AS choice_id,
                        C.choice_text,
                        C.is_correct
                    FROM
                        QUESTIONS Q
                    JOIN
                        CHOICES C ON Q.id = C.question_id
                    WHERE
                        Q.quiz_id = %s;''', (quiz_id,))
    data = cur.fetchall()
    cur.close()

    questions = {}
    for row in data:
        question_id = row['question_id']
        if question_id not in questions:
            questions[question_id] = {
                'question_text': row['question_text'],
                'choices': []
            }
        questions[question_id]['choices'].append({
            'choice_id': row['choice_id'],
            'choice_text': row['choice_text'],
            'is_correct': row['is_correct']
        })

    return jsonify(list(questions.values()));

@app.route('/api/submit', methods=['POST'])
@cross_origin(origins="*")
def calc_score():
    connection = create_connection()
    cur = connection.cursor()
    answers = request.json['answers']
    score = 0
    for answer in answers:
        question_id = answer['question_id']
        choice_id = answer['choice_id']
        cur.execute('''SELECT is_correct FROM choices where id = %s and question_id = %s''', (choice_id, question_id))
        result = cur.fetchone()
        if result is not None and result[0] == 1:
            score += 1
    return jsonify({"score": score})
    

if __name__ == '__main__':
    app.run()