numberList = []

i = len(numberList)

print('Please input 10 items below and include the number 7 at least once.')

while i <= 10:
    numberInput = input("enter a number:")
    numberList.append(numberInput)
    i = i + 1
    if i == 10:
        break

print(numberList)

howManyTimes = numberList.count('7')

print('The number 7 appears' + ' ' + str(howManyTimes) + ' ' + 'times in the list.')