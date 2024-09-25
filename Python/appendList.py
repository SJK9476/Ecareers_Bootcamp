# numberList = []

# i = len(numberList)

# print('Please input 10 items below and include the number 7 at least once.')

# while i <= 10:
#     numberInput = input("enter a number:")
#     numberList.append(numberInput)
#     i = i + 1
#     if i == 10:
#         break

# print(numberList)

# howManyTimes = numberList.count('7')

# print('The number 7 appears' + ' ' + str(howManyTimes) + ' ' + 'times in the list.')

# Home Assignment:
# 1. Write a python program to test whether a passed letter is a vowel or not?


# def checkVowel(x):
#     if (x == 'a' or x == 'e' or x == 'i' or x == 'o' or x == 'u'):
#         print(x, 'is a vowel')
#     else:
#         print(x, 'is a consonant')


# checkVowel('a')
# checkVowel('b')
# checkVowel('e')
# checkVowel('i')
# checkVowel('o')
# checkVowel('u')
# checkVowel('z')


# 2. Write a python program that displays your name, age and address on three different lines.

# name = input('enter your name: ')
# age = input('enter your age: ')
# address = input('enter your address: ')

# print(name + '\n' + age + '\n' + address)



# 3. Write a python program to sum three given integers. However, if two values are equal
#    then the sum will be zero.

val1 = int(input('enter a number: '))

val2 = int(input('enter another number: '))

val3 = int(input('enter another number: '))

def checkMatch(val1, val2, val3):
    if (val1 == val2 or val1 == val3):
        sum = 0
    else:
        sum = val1 + val2 + val3
    print(sum)

checkMatch(val1, val2, val3)