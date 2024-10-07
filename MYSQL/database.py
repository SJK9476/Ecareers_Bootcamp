import mysql.connector

# parameters for connecting to the mySQL database

db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Jasmin4694!"
)

# Create a cursor object to execute SQL queries

cursor=db_connection.cursor()

create_database_query = "CREATE DATABASE test_db"
cursor.execute(create_database_query)

# Commit the changes made
db_connection.commit()

# Close the cursor and connnection
cursor.close()
db_connection.close()

print('Database created successfully')