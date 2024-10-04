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

with open(r'Python/fileHandling/test.txt', 'r') as fp:
    lines = fp.readlines()
    print(lines)