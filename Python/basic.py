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


list1 = ['Hello', 'take']
list2 = ['Dear', 'Sir']

newList = [item1 + " " + item2 for item1 in list1 for item2 in list2]

print(newList)