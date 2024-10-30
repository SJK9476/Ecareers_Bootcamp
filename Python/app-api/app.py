from flask import Flask, jsonify
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
        database='e_careers'
    )
    return connection

# mysql = MySQL(app)

@app.route('/data', methods=['GET'])
@cross_origin(origins="*")
def get_data():
    connection = create_connection()
    cur = connection.cursor(dictionary=True)
    cur.execute('''SELECT * FROM employee''')
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

# @app.route('/data', methods=['POST'])
# def post_data():
#     cur = mysql.connection.cursor()
#     id = request.json['id']
#     name = request.json['emp_name']
#     dept = request.json['emp_dept']
#     salary = request.json['emp_salary']
#     cur.execute('''INSERT into employee (emp_id, emp_name, emp_dept, emp_salary) VALUES (%s, %s, %s, %s)''', (id, name, dept, salary))
#     mysql.connection.commit()
#     cur.close()
#     return jsonify({'message: Data inserted successfully'})

# code above didnt work because I made an error missing apostophe's in the return statement

@app.route('/data', methods=['POST'])
def post_data():
    cur = mysql.connection.cursor()
    id = request.json['id']
    name = request.json['emp_name']
    dept = request.json['emp_dept']
    salary = request.json['emp_salary']
    cur.execute('''INSERT INTO employee (emp_id, emp_name, emp_dept, emp_salary) VALUES(%s, %s, %s, %s)''', (id, name, dept, salary))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message':'Data inserted successfully'})

@app.route('/create', methods=['POST'])
def create_table():
    cur = mysql.connection.cursor()
    cur.execute('''CREATE TABLE testTable(test_id int primary key, test_name varchar(50), test_params varchar(100), test_date date)''')
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Table created successfully'})


@app.route('/data/<int:id>', methods=['GET'])
def get_data_by_id(id):
    cur = mysql.connection.cursor()
    cur.execute('''SELECT * FROM employee WHERE emp_id = %s''', (id,))
    data = cur.fetchall()
    cur.close()
    return jsonify(data)


@app.route('/data/<int:id>', methods=['DELETE'])
def delete_data_by_id(id):
    cur = mysql.connection.cursor()
    cur.execute('''DELETE FROM employee WHERE emp_id = %s''', (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message':'Data deleted successfully'})

@app.route('/data/<int:id>', methods=['PUT'])
def update_data_by_id(id):
    cur = mysql.connection.cursor()
    name = request.json['emp_name']
    dept = request.json['emp_dept']
    cur.execute('''UPDATE employee SET emp_name = %s, emp_dept = %s WHERE emp_id = %s''', (name, dept, id))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message':'Data updated successfully'})

if __name__ == '__main__':
    app.run(port=5002)