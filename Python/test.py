# # value = input("enter a value")

# # print(value)
# python syntax uses whitespace and indentations to seperate parts of code. It also utilises colons rather than semicolons to separate statements


# # value = int(input("enter a value"))
# # def printIncrements():
    
# #     i=0
# #     max=100
# #     while (i <= max):
# #         print(i)
# #         i=i+value


# # printIncrements()

# # num1 = int(input("enter a number"))
# # num2 = int(input("enter another number"))

# # print(num1+num2)

# # a = int(input("enter a number"))
# # b = int(input("enter another number"))
# # c = int(input("enter another number"))

# # def printTriangleArea():
# #     s = (a + b + c) / 2
# #     area = (s * (s-a) * (s-b) * (s-c)) ** 0.5

# #     print(area)

# # printTriangleArea()

# # calcType = int(input("enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division"))
# # num1 = int(input("enter a number"))
# # num2 = int(input("enter another number"))


# below is an example of a calculator using if/else statements in python
# # def calc():
# #     if calcType == 1:
# #         print(num1 + num2)
# #     elif calcType == 2:
# #         print(num1 - num2)
# #     elif calcType == 3:
# #         print(num1 * num2)
# #     elif calcType == 4:
# #         print(num1 / num2)
# #     else:
# #         print("invalid input")

# # # calc()


# below is an example of a calculator using a switch statement in python
# # def calc2():

# #     match calcType:
# #         case 1:
# #             print(num1 + num2)
# #         case 2:
# #             print(num1 - num2)
# #         case 3:
# #             print(num1 * num2)
# #         case 4:
# #             print(num1 / num2)
        
# # calc2()

# best practise to declare functions to use in multiple places, whileTrue statmertns used to keep the program running.
# def add(x, y):
#     return x + y

# def subtract(x, y):
#     return x - y

# def multiply(x, y):
#     return x * y

# def divide(x, y):
#     return x / y    

# print("please select operation to execute")
# print("1. Add")
# print("2. Subtract")
# print("3. Multiply")
# print("4. Divide")

# while True:
#     choice = input("enter choice(1/2/3/4): ")

#     if choice in ('1', '2', '3', '4'):
#         try:
#             num1 = float(input("enter first number: "))
#             num2 = float(input("enter second number: "))
#         except ValueError:
#             print("Invalid input - please choose a number between 1 and 4")
#             continue

#         if choice == '1':
#             print(num1, "+", num2, "=", add(num1, num2))

#         elif choice == '2':
#             print(num1, "-", num2, "=", subtract(num1, num2))

#         elif choice == '3':
#             print(num1, "*", num2, "=", multiply(num1, num2))

#         elif choice == '4':
#             print(num1, "/", num2, "=", divide(num1, num2))
#         break
#     else:
#         print("invalid input")

