import mysql.connector, database_config


# parameters for connecting to the mySQL database

# db_connection = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="Jasmin4694!",
#     database="test_db"
# )

# # Create a cursor object to execute SQL queries

# cursor=db_connection.cursor()

# creat_table_query = "create table users(id int, name varchar(50), email varchar(50), password varchar(50), mobile varchar(50), address varchar(50))"

# cursor.execute(creat_table_query)

# # Commit the changes made
# db_connection.commit()

# # Close the cursor and connnection
# cursor.close()
# db_connection.close()

# print('Table created successfully')

config = database_config.config

db_connection = mysql.connector.connect(**config)

# Create a cursor object to execute SQL queries

cursor=db_connection.cursor()

insert_table_data_query = "insert into users (001, 'Samuel King', 'samueljamesking94@gmail.com', 'mockpassword', '1234567890', '1234 Main St')"

cursor.execute(insert_table_data_query)

# Commit the changes made
db_connection.commit()

# Close the cursor and connnection
cursor.close()
db_connection.close()

print('user data created successfully')