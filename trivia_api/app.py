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

# Below if the API to load the initial page

@app.route('/', methods=['GET'])
@cross_origin(origins="*")
def index():
    return render_template('index.html')

@app.route('/quiz.html', methods=['GET'])
@cross_origin(origins="*")
def quiz():
    return render_template('quiz.html')

@app.route('/result.html', methods=['GET'])
@cross_origin(origins="*")
def result():
    return render_template('result.html')
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
                'question_id': row['question_id'],
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
    quiz_id = request.json['quiz_id']
    score = 0
    total_questions = 0
    for answer in answers:
        question_id = answer['question_id']
        choice_id = answer['choice_id']
        print(f"Checking answer: questions_id={question_id}, choice_id={choice_id}")
        cur.execute('''SELECT is_correct FROM choices where id = %s and question_id = %s''', (choice_id, question_id))
        result = cur.fetchone()
        print(f"Database result: {result}")
        if result is not None and result[0] == 1:
            score += 1
        total_questions += 1

    cur.execute('''SELECT COUNT(*) FROM questions WHERE quiz_id = %s''', (quiz_id,))
    total_questions = cur.fetchone()[0]
    return jsonify({"score": score, "total_questions": total_questions})
    

if __name__ == '__main__':
    app.run()