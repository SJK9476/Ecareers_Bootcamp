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

# config = database_config.config

# db_connection = mysql.connector.connect(**config)

# # Create a cursor object to execute SQL queries

# cursor=db_connection.cursor()

# insert_table_data_query = "insert into users values (003, 'Joshua Browne', 'JB@gmail.com', 'mockpassword', '1234567890', '745 Secondary St')"

# cursor.execute(insert_table_data_query)

# # Commit the changes made
# db_connection.commit()

# # Close the cursor and connnection
# cursor.close()
# db_connection.close()

# print('user data created successfully')

config = database_config.config

try:
    db_connection = mysql.connector.connect(**config)

    # Create a cursor object to execute SQL queries

    cursor=db_connection.cursor()

    sql_select_query = """select * from users where id=%s"""

    cursor.execute(sql_select_query, params=[3])

    data = cursor.fetchall() #fetchone() & fetchmany(SIZE) are alternatives depending on how many rows you want to fetch

    for row in data:
        print("Id = ", row[0], )
        print("Name = ", row[1])
        print("Email = ", row[2])
        print("Password = ", row[3])
        print("Mobile = ", row[4])
        print("Address = ", row[5], "\n")

    db_connection.commit()

    # Close the cursor and connnection
    print('user data fetched successfully')

except mysql.connector.Error as error:
    print("Failed to read data from MySQL table")

finally:
    if db_connection.is_connected():
        cursor.close()
        db_connection.close()
        print("MySQL connection is closed")
