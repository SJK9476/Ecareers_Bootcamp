# File Handling

# import linecache

# line = linecache.getline(r'Python\basic.py', 2)

# print(line)

# fp = open('C:/Users/king_/OneDrive/Desktop/Bootcamp Assignments/Python/test.txt', 'x')

# fp.close()

# import os

# os.remove('C:/Users/king_/OneDrive/Desktop/Bootcamp Assignments/Python/test.txt')

# fp = open('C:/Users/king_/OneDrive/Desktop/Bootcamp Assignments/Python/fileHandling/test.txt', 'w')
# fp.write('Testing python file handling skills: open and insert this text in the file')
# fp.close()

# fp = open('C:/Users/king_/OneDrive/Desktop/Bootcamp Assignments/Python/fileHandling/test.txt', 'a')
# fp.write('\nInsert to end of file')
# fp.close()

# with open(r'Python/fileHandling/test.txt', 'a') as fp:
#     fp.write('\nInsert to end of file using with statement')

# with open(r'Python/fileHandling/test.txt', 'r') as fp:
#     line_numbers = [0, 1]

#     lines = []

#     for i, line in enumerate(fp):
#         if i in line_numbers:
#             lines.append(line)
#         elif i > 1:
#             break
    
# print(lines)

# N=3
# with open(r'Python/fileHandling/test.txt', 'r') as fp:
#     for i in range(N):
#         line = next(fp).strip()
#         print(line)

# list = ['Hello', 'take', 'Dear', 'Sir']

# with open('Python/fileHandling/newList.txt', 'w') as fp:
#     for items in list:
#         fp.write(items + '\n')

# fp.close()        

# with open(r'Python/fileHandling/newList.txt') as file1, open(r'Python/fileHandling/newList2.txt') as file2:
#     for line1, line2 in zip(file1, file2):
#         print(line1+' '+line2)



# try:
#     number = int(input('Enter a number: '))
#     result = 10 / number
#     print(result)
# except ZeroDivisionError:
#     print('You cannot divide by zero!')
# except ValueError:
#     print('Invalid input!')
# print('Program continues..')

# class InvalidAgeException(Exception):
#     'Age is less than 18 years old.'

# number = int(input('Enter your age: '))

# try:
#     if number < 18:
#         raise InvalidAgeException
#     else:
#         print('Age is valid.')
# except InvalidAgeException:
#     print('Age is less than 18 years old.')

# list = [1, 2, 3, 4, 5]
# indexChoice = int(input('Enter a number: '))

# try:
#     print(list[indexChoice])
# except IndexError:
#     print('Index out of range!')
    

# try:
#     number1 = int(input('Enter a number: '))
#     number2 = int(input('Enter another number: '))
#     result = number1 / number2
#     print(result)
# except ZeroDivisionError:
#     print('You cannot divide by zero!')
# except ValueError:
#     print('Invalid input! Please make sure to only input numbers.')

class MinumumSalaryThresholdError(Exception):
    'Salary is less than 10,000.'

name = input('Enter your name: ')
dept = input('Enter your department: ')
salary = int(input('Enter your salary: '))

try:
    if salary < 10000:
        raise MinumumSalaryThresholdError
    else:
        print('Name: ', name)
        print('Department: ', dept)
        print('Salary:',salary, 'GBP')
except MinumumSalaryThresholdError:
    print('Salary is less than 10,000!')
