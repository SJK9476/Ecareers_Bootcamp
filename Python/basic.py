import factorsModule
import random

# # str1 = "My name is {firstName}, I am {age} years old".format(firstName = 'Samuel', age = 30)
# # str1 = "My name is {0}, I am {1} years old".format('Samuel', 30)
# str1 = "My name is {}, I am {} years old".format('Samuel', 30)

# print(str1)

# # Important string functions

# str2 = '5473sdfg'
# print(str2.isdigit())

# text = 'Python is annoying'
# print(text.split())

# text1 = 'Spiderman, Batman, Superman'
# print(text1.rsplit(','))

# print(text1.find('Batman'))

#Write a python program to get a single string from two given strings
#separated by space and swap the string.
#Sample input: 'abc','xyz'
#Expected output: 'xyz abc'

# strings = ['HELLO', 'WORLD']
# strings.reverse()
# print(" ".join(strings))


# str1 = 'HELLO'
# str2 = 'WORLD'
# newStr = [str1, str2]
# newStr.reverse()
# print(" ".join(newStr))

#Write a python program that accepts a filname with extension from the user
#and prints the extension of the file


# file = input("Enter file name with extension: ")

# if '.' not in file:
#     print("Invalid file name, must contain valid extension type")
#     exit()

# else:
#     file = file.split('.')
#     print("The extension of the file is: ", file[-1])


#Input an integer n and compute the value of n+nn+nnn
#example: 5 compute 5+55+555


# n = input("Enter a number: ")

# str2 = n + n
# str3 = n + str2


# print('{} + {} + {} = {}'.format(n, str2, str3, int(n) + int(str2) + int(str3)))

# nums = [2]

# nums.append(5)

# print(nums)

# list = [2, 4, 6, 3]
# newList = []

# i = 0
# while i < len(list):
#     newList.append(list[i] * list[i])
#     i = i + 1

# print(newList)


# list1 = ['Hello', 'take']
# list2 = ['Dear', 'Sir']
# result = []

# # Format below: expression then for loop then condition/nested for loop

# # newList = [item1 + " " + item2 for item1 in list1 for item2 in list2]

# # print(newList)

# for txt1 in list1:
#     for txt2 in list2:
#         result.append(txt1 + " " + txt2)
# print(result)

# Write a program to find value 20 in the list,
# and if it is present, replace it with 200.
# Only update the first occurrence of an item.
 
# Input: list1 = [5, 10, 15, 20, 25, 50, 20]
# Output: [5, 10, 15, 200, 25, 50, 20]

# list1 = [5, 10, 15, 20, 25, 50, 20]

# # i = list1.index(20)
# # list1[i] = 200
# # print(list1)

# newList = [item for item in list1 if item % 2 == 0]

# print(newList)

# tuple1 = (10, 20, 30, 40, 50)

# # newTuple = tuple1[::-1]
# # print(newTuple)

# (a, b, c, d, e) = tuple1

# print(a)
# print(b)
# print(c)
# print(d)
# print(e)

# Convert two lists into a dictionary
# Input:
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

# keys = ['Ten', 'Twenty', 'Thirty', 'Forty']
# values = [10, 20, 30]

# dict1 = dict(zip(keys, values))

# print(dict1)

# result = {}

# for i in range(len(keys)):
#     result.update ({keys[i]: values[i]})

# print(result)

#Write a Python program to check if value 200 exists in the following dictionary.
#Input:
#    sample_dict = {'a': 100, 'b': 200, 'c': 300}
#Output:
#   200 present in a dict


# dict = {'a': 100, 'b': 200, 'c': 300}

# if 200 in dict.values():
#     print ('true')

# # print(200 in dict.values())

# Get the key of a minimum value from the following dictionary
# sample_dict = {
#   'Physics': 82,
#   'Math': 65,
#   'history': 75
# }
# Output:
#     Math

# sampleDict = {
#     'Physics': 82,
#     'Math': 65,
#     'history': 75}


# res = min(sampleDict, key=sampleDict.get)

# print(res)

# factorsModule.printFactors(720)

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

random.shuffle(list)

print(list)