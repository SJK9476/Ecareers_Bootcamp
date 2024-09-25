# value = input("enter a value")

# print(value)
# python syntax uses whitespace and indentations to seperate parts of code. It also utilises colons rather than semicolons to separate statements


# value = int(input("enter a value"))
# def printIncrements():
    
#     i=0
#     max=100
#     while (i <= max):
#         print(i)
#         i=i+value


# printIncrements()

# num1 = int(input("enter a number"))
# num2 = int(input("enter another number"))

# print(num1+num2)

# a = int(input("enter a number"))
# b = int(input("enter another number"))
# c = int(input("enter another number"))

# def printTriangleArea():
#     s = (a + b + c) / 2
#     area = (s * (s-a) * (s-b) * (s-c)) ** 0.5

#     print(area)

# printTriangleArea()

calcType = int(input("enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division"))
num1 = int(input("enter a number"))
num2 = int(input("enter another number"))


# below is an example of a calculator using if/else statements in python
def calc():
    if calcType == 1:
        print(num1 + num2)
    elif calcType == 2:
        print(num1 - num2)
    elif calcType == 3:
        print(num1 * num2)
    elif calcType == 4:
        print(num1 / num2)
    else:
        print("invalid input")

# calc()


# below is an example of a calculator using a switch statement in python
def calc2():
    match calcType:
        case 1:
            print(num1 + num2)
        case 2:
            print(num1 - num2)
        case 3:
            print(num1 * num2)
        case 4:
            print(num1 / num2)
        case _:
            print("invalid input")


calc2()


4



        