import mysql.connector, database_config

config = database_config.config

try:
    db_connection = mysql.connector.connect(**config)

    # Create a cursor object to execute SQL queries

    cursor=db_connection.cursor()
    cursor1=db_connection.cursor()

    update_salary_query = "update employee set emp_salary= (emp_salary * 1.1)"

    cursor.execute(update_salary_query)

    cursor1.execute("select * from employee")

    data = cursor1.fetchall() #fetchone() & fetchmany(SIZE) are alternatives depending on how many rows you want to fetch

    for row in data:
        print("emp_id = ", row[0], )
        print("emp_name = ", row[1])
        print("emp_dept = ", row[2])
        print("emp_salary = ", row[3])
        print("joining_date = ", row[4] , "\n")
        print("-------------------------------------------------", "\n")

    db_connection.commit()

    # Close the cursor and connnection
    print('user data fetched successfully')

except mysql.connector.Error as error:
    print("Failed to read data from MySQL table")

finally:
    if db_connection.is_connected():
        cursor.close()
        cursor1.close()
        db_connection.close()
        print("MySQL connection is closed")
