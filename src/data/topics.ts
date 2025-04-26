
import { Topic } from '../types/topics';

export const pythonTopics: Topic[] = [
  {
    id: "variables",
    title: "Variables & Data Types",
    description: "Learn about Python variables and basic data types",
    content: `# Variables and Data Types in Python

Variables are containers for storing data values. Python has several built-in data types:

1. Numbers (int, float)
2. Strings (str)
3. Booleans (bool)
4. Lists
5. Dictionaries
6. Tuples
7. Sets

## Creating Variables
In Python, variables are created when you assign a value:
\`\`\`python
name = "Python"
age = 30
height = 1.75
is_student = True
\`\`\`

## Numbers
Python supports integers and floating-point numbers:
\`\`\`python
# Integers
x = 10
negative = -5

# Floating point
y = 10.5
scientific = 1.5e2  # 150.0
\`\`\`

## Strings
Strings are sequences of characters:
\`\`\`python
name = "Python"
multiline = """This is a
multiline string"""
\`\`\`

## Booleans
Booleans represent truth values:
\`\`\`python
is_valid = True
has_error = False
\`\`\`

## Type Conversion
You can convert between types:
\`\`\`python
# String to int
age_str = "30"
age = int(age_str)  # 30

# Int to string
count = 10
count_str = str(count)  # "10"

# To float
price = float("19.99")  # 19.99
\`\`\`
    `,
    questions: [
      {
        id: "var_q1",
        question: "What will be the value of x after this code runs?\nx = 5\nx = x + 3",
        options: ["5", "3", "8", "15"],
        correctAnswer: 2,
        explanation: "The value will be 8 because first x is assigned 5, then 3 is added to it."
      },
      {
        id: "var_q2",
        question: "Which of these is a valid variable name in Python?",
        options: ["2names", "_name", "my-name", "class"],
        correctAnswer: 1,
        explanation: "Variable names can start with an underscore, but not with numbers or special characters."
      },
      {
        id: "var_q3",
        question: "What is the data type of x?\nx = 5.0",
        options: ["int", "float", "str", "bool"],
        correctAnswer: 1,
        explanation: "Numbers with decimal points are stored as float data type in Python."
      },
      {
        id: "var_q4",
        question: "What will print?\nx = 1\ny = '2'\nprint(str(x) + y)",
        options: ["3", "12", "Error", "1 2"],
        correctAnswer: 1,
        explanation: "str(x) converts 1 to '1', then concatenates with '2' to make '12'"
      },
      {
        id: "var_q5",
        question: "Which statement is True about Python variables?",
        options: [
          "Variables must be declared before use",
          "Variables must have a type specified",
          "Variables can change types dynamically",
          "Variables cannot start with letters"
        ],
        correctAnswer: 2,
        explanation: "Python variables are dynamically typed and can change types during execution."
      },
      {
        id: "var_q6",
        question: "What happens when you try to add a string and an integer in Python?",
        options: ["They concatenate", "The integer converts to string", "TypeError occurs", "The string converts to integer"],
        correctAnswer: 2,
        explanation: "Python raises a TypeError when trying to add different types without explicit conversion."
      },
      {
        id: "var_q7",
        question: "Which of these creates a floating-point number?",
        options: ["10", "10.0", "int(10)", "str(10.0)"],
        correctAnswer: 1,
        explanation: "10.0 creates a floating-point number. Numbers with decimal points are stored as float type."
      },
      {
        id: "var_q8",
        question: "What is the value of type(True)?",
        options: ["'bool'", "'Boolean'", "<class 'bool'>", "true"],
        correctAnswer: 2,
        explanation: "The type() function returns <class 'bool'> for boolean values in Python."
      },
      {
        id: "var_q9",
        question: "How do you create a complex number in Python?",
        options: ["complex(1, 2)", "(1, 2)", "1 + 2i", "1 + 2j"],
        correctAnswer: 0,
        explanation: "The complex() function or using 'j' notation creates complex numbers in Python."
      },
      {
        id: "var_q10",
        question: "What is the result of dividing two integers in Python 3?",
        options: ["Always an integer", "Always a float", "Depends on the numbers", "String representation"],
        correctAnswer: 1,
        explanation: "In Python 3, division of integers with / always returns a float."
      }
    ]
  },
  {
    id: "operators",
    title: "Operators & Expressions",
    description: "Learn about Python operators and how to use them in expressions",
    content: `# Operators and Expressions in Python

Operators are special symbols that perform operations on variables and values.

## Arithmetic Operators
\`\`\`python
a = 10
b = 3

# Addition
sum_result = a + b  # 13

# Subtraction
diff_result = a - b  # 7

# Multiplication
product = a * b  # 30

# Division
quotient = a / b  # 3.3333...

# Floor Division
floor_div = a // b  # 3

# Modulus (remainder)
remainder = a % b  # 1

# Exponentiation
power = a ** b  # 1000
\`\`\`

## Comparison Operators
\`\`\`python
x = 5
y = 10

x == y  # Equal to - False
x != y  # Not equal to - True
x > y   # Greater than - False
x < y   # Less than - True
x >= y  # Greater than or equal to - False
x <= y  # Less than or equal to - True
\`\`\`

## Logical Operators
\`\`\`python
p = True
q = False

p and q  # False
p or q   # True
not p    # False
\`\`\`

## Assignment Operators
\`\`\`python
x = 10      # Assign value
x += 5      # x = x + 5 (15)
x -= 3      # x = x - 3 (12)
x *= 2      # x = x * 2 (24)
x /= 4      # x = x / 4 (6.0)
\`\`\`

## Bitwise Operators
\`\`\`python
a = 10  # binary: 1010
b = 6   # binary: 0110

a & b   # AND: 2 (binary: 0010)
a | b   # OR: 14 (binary: 1110)
a ^ b   # XOR: 12 (binary: 1100)
~a      # NOT: -11 (binary: inversion)
a << 1  # Left shift: 20 (binary: 10100)
a >> 1  # Right shift: 5 (binary: 0101)
\`\`\`

## Identity and Membership Operators
\`\`\`python
# Identity operators
x is y      # True if x and y are the same object
x is not y  # True if x and y are not the same object

# Membership operators
x in y      # True if x is a member of y
x not in y  # True if x is not a member of y
\`\`\`
    `,
    questions: [
      {
        id: "op_q1",
        question: "What is the value of x after: x = 10 % 3?",
        options: ["1", "3", "3.33", "0"],
        correctAnswer: 0,
        explanation: "The % operator returns the remainder of division. 10 divided by 3 is 3 with a remainder of 1."
      },
      {
        id: "op_q2",
        question: "What is the result of the expression: 2 ** 3?",
        options: ["5", "6", "8", "9"],
        correctAnswer: 2,
        explanation: "The ** operator performs exponentiation. 2 raised to the power of 3 is 8."
      },
      {
        id: "op_q3",
        question: "What will be the value of x after: x = 15 // 4?",
        options: ["3", "3.75", "4", "3.0"],
        correctAnswer: 0,
        explanation: "The // operator performs floor division, giving the integer part of the quotient. 15 divided by 4 is 3.75, so the floor value is 3."
      },
      {
        id: "op_q4",
        question: "What is the result of the expression: True and False or True?",
        options: ["True", "False", "Error", "None"],
        correctAnswer: 0,
        explanation: "In Python, 'and' has higher precedence than 'or'. So (True and False) is False, and then False or True evaluates to True."
      },
      {
        id: "op_q5",
        question: "What is the value of x after: x = 5; x += 3; x *= 2?",
        options: ["13", "16", "11", "8"],
        correctAnswer: 1,
        explanation: "First x becomes 5+3=8, then x becomes 8*2=16."
      },
      {
        id: "op_q6",
        question: "What is the result of 5 ** 2?",
        options: ["7", "10", "25", "52"],
        correctAnswer: 2,
        explanation: "The ** operator performs exponentiation. 5 raised to the power of 2 is 25."
      },
      {
        id: "op_q7",
        question: "What is the value of 17 // 5?",
        options: ["3", "3.4", "4", "3.0"],
        correctAnswer: 0,
        explanation: "The // operator performs floor division. 17 divided by 5 is 3.4, floored to 3."
      },
      {
        id: "op_q8",
        question: "What is the result of 'Python' * 2?",
        options: ["PythonPython", "Python2", "Error", "Python * 2"],
        correctAnswer: 0,
        explanation: "The * operator with a string and integer repeats the string that many times."
      },
      {
        id: "op_q9",
        question: "What is the output of True + True in Python?",
        options: ["True", "False", "2", "Error"],
        correctAnswer: 2,
        explanation: "True is treated as 1 in arithmetic operations, so True + True equals 2."
      },
      {
        id: "op_q10",
        question: "What is the result of 3 < 4 < 5 in Python?",
        options: ["Error", "False", "True", "Invalid syntax"],
        correctAnswer: 2,
        explanation: "Python supports chained comparisons. 3 < 4 < 5 is equivalent to 3 < 4 and 4 < 5."
      }
    ]
  },
  {
    id: "control_flow",
    title: "Control Flow",
    description: "Learn about decision making with if, elif, and else statements",
    content: `# Control Flow in Python

Control flow statements direct the order in which a program's code executes.

## If Statement
The \`if\` statement executes a block of code if a specified condition is true:

\`\`\`python
age = 18

if age >= 18:
    print("You are an adult")
\`\`\`

## If-Else Statement
The \`else\` clause executes when the condition is false:

\`\`\`python
age = 16

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
\`\`\`

## If-Elif-Else Statement
The \`elif\` (else if) clause checks additional conditions:

\`\`\`python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
\`\`\`

## Nested If Statements
If statements can be nested within other if statements:

\`\`\`python
num = 15

if num > 0:
    print("Positive number")
    
    if num % 2 == 0:
        print("Even number")
    else:
        print("Odd number")
else:
    print("Non-positive number")
\`\`\`

## Conditional Expressions (Ternary Operator)
A compact way to write simple if-else statements:

\`\`\`python
age = 20
status = "adult" if age >= 18 else "minor"
\`\`\`

## Logical Operators in Conditions
Combining conditions with logical operators:

\`\`\`python
username = "admin"
password = "password123"

if username == "admin" and password == "password123":
    print("Login successful")
else:
    print("Invalid credentials")
    
if not username:
    print("Username cannot be empty")
\`\`\`
    `,
    questions: [
      {
        id: "cf_q1",
        question: "What will this code print?\nx = 5\nif x > 10:\n    print('Greater')\nelse:\n    print('Less or equal')",
        options: ["Greater", "Less or equal", "Nothing", "Error"],
        correctAnswer: 1,
        explanation: "Since x is 5, which is not greater than 10, the else block executes and prints 'Less or equal'."
      },
      {
        id: "cf_q2",
        question: "What is the output of this code?\nscore = 75\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelif score >= 70:\n    print('C')\nelse:\n    print('F')",
        options: ["A", "B", "C", "F"],
        correctAnswer: 2,
        explanation: "With a score of 75, the condition score >= 70 is the first one that evaluates to True, so 'C' is printed."
      },
      {
        id: "cf_q3",
        question: "What will be assigned to 'result'?\nx = 10\nresult = 'Even' if x % 2 == 0 else 'Odd'",
        options: ["Even", "Odd", "None", "Error"],
        correctAnswer: 0,
        explanation: "This is a conditional expression (ternary operator). Since 10 % 2 = 0 is True, 'Even' is assigned to result."
      },
      {
        id: "cf_q4",
        question: "What will this code print?\na = 5\nb = 10\nif a > 0 and b > 0:\n    print('Both positive')\nelse:\n    print('At least one non-positive')",
        options: ["Both positive", "At least one non-positive", "Nothing", "Error"],
        correctAnswer: 0,
        explanation: "Since both a and b are greater than 0, the condition (a > 0 and b > 0) evaluates to True, so 'Both positive' is printed."
      },
      {
        id: "cf_q5",
        question: "What will this nested if statement print?\nx = 20\nif x > 0:\n    if x < 10:\n        print('Single digit positive')\n    else:\n        print('Multiple digit positive')\nelse:\n    print('Non-positive')",
        options: ["Single digit positive", "Multiple digit positive", "Non-positive", "Nothing"],
        correctAnswer: 1,
        explanation: "First, x > 0 is True, so we enter the outer if. Then, x < 10 is False (since 20 is not less than 10), so we enter the else clause and print 'Multiple digit positive'."
      },
      {
        id: "cf_q6",
        question: "What is the output of this code?\nx = -1\nif x > 0:\n    print('Positive')\nelif x == 0:\n    print('Zero')\nelse:\n    print('Negative')",
        options: ["Positive", "Zero", "Negative", "Nothing"],
        correctAnswer: 2,
        explanation: "Since x is -1, the first condition (x > 0) is false. The elif condition (x == 0) is also false. Therefore, the else block is executed, printing 'Negative'."
      },
      {
        id: "cf_q7",
        question: "What will be the value of 'grade'?\nscore = 92\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelse:\n    grade = 'C'",
        options: ["A", "B", "C", "None"],
        correctAnswer: 0,
        explanation: "Since score is 92, the first condition (score >= 90) is true, so 'A' is assigned to grade."
      },
      {
        id: "cf_q8",
        question: "What will this code print?\nx = 7\nif x % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
        options: ["Even", "Odd", "Nothing", "Error"],
        correctAnswer: 1,
        explanation: "The % operator returns the remainder of division. 7 % 2 is 1, which is not 0, so the else block executes and prints 'Odd'."
      },
      {
        id: "cf_q9",
        question: "What will this code print?\nage = 25\ncountry = 'USA'\nif age > 18 and country == 'Canada':\n    print('Eligible')\nelse:\n    print('Not eligible')",
        options: ["Eligible", "Not eligible", "Nothing", "Error"],
        correctAnswer: 1,
        explanation: "The condition (age > 18 and country == 'Canada') is false because country is 'USA', so the else block executes and prints 'Not eligible'."
      },
      {
        id: "cf_q10",
        question: "What will this code print?\nx = 5\nif x > 0:\n    if x < 10:\n        print('Valid')\n    else:\n        print('Invalid')\nelse:\n    print('Negative')",
        options: ["Valid", "Invalid", "Negative", "Nothing"],
        correctAnswer: 0,
        explanation: "First, x > 0 is True, so we enter the outer if. Then, x < 10 is also True, so we print 'Valid'."
      }
    ]
  },
  {
    id: "loops",
    title: "Loops",
    description: "Learn how to repeat code blocks with for and while loops",
    content: `# Loops in Python

Loops allow you to execute a block of code multiple times.

## For Loops
For loops iterate over a sequence (like a list, tuple, or string)

\`\`\`python
# Iterating through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Iterating through a range
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)
\`\`\`

## While Loops
While loops continue as long as a condition is true

\`\`\`python
count = 0
while count < 5:
    print(count)
    count += 1
\`\`\`

## The Range Function
The range function generates a sequence of numbers:

\`\`\`python
# range(stop) - starts at 0, ends at stop-1
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# range(start, stop) - starts at start, ends at stop-1
for i in range(2, 6):  # 2, 3, 4, 5
    print(i)

# range(start, stop, step) - starts at start, ends before stop, steps by step
for i in range(1, 10, 2):  # 1, 3, 5, 7, 9
    print(i)
\`\`\`

## Loop Control
\`\`\`python
# Break - exits the loop
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0, 1, 2, 3, 4

# Continue - skips the current iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0, 1, 3, 4
\`\`\`

## Else with Loops
The else clause executes after the loop completes normally (without break):

\`\`\`python
for i in range(5):
    print(i)
else:
    print("Loop completed")

# Else won't execute if the loop is terminated by break
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("This won't print")
\`\`\`

## Nested Loops
Loops can be nested within each other:

\`\`\`python
for i in range(3):
    for j in range(2):
        print(f"{i}, {j}")
\`\`\`
    `,
    questions: [
      {
        id: "loop_q1",
        question: "What numbers will this loop print?\nfor i in range(2, 8, 2):\n    print(i)",
        options: ["2, 4, 6", "2, 4, 6, 8", "2, 3, 4, 5, 6, 7", "2, 3, 4, 5, 6, 7, 8"],
        correctAnswer: 0,
        explanation: "range(2, 8, 2) starts at 2, ends before 8, and increments by 2, giving 2, 4, 6."
      },
      {
        id: "loop_q2",
        question: "What will this code print?\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)",
        options: ["0, 1, 2", "0, 2", "1, 2", "0, 1"],
        correctAnswer: 1,
        explanation: "When i equals 1, the continue statement skips the rest of that iteration, so only 0 and 2 are printed."
      },
      {
        id: "loop_q3",
        question: "What is the output of this code?\ni = 1\nwhile i < 5:\n    print(i)\n    i += 1",
        options: ["1, 2, 3, 4, 5", "1, 2, 3, 4", "1, 2, 3", "This is an infinite loop"],
        correctAnswer: 1,
        explanation: "The loop prints i and increments it until i < 5 is false, so it prints 1, 2, 3, 4."
      },
      {
        id: "loop_q4",
        question: "What will this code print?\nfor i in range(3):\n    for j in range(2):\n        print(f'{i}{j}', end=' ')",
        options: ["00 01 10 11 20 21", "00 01 02 10 11 12 20 21 22", "00 10 20 01 11 21", "00 11 22"],
        correctAnswer: 0,
        explanation: "The nested loops iterate through each combination of i (0-2) and j (0-1), printing '00 01 10 11 20 21'."
      },
      {
        id: "loop_q5",
        question: "What does the break statement do in a loop?",
        options: [
          "Skips to the next iteration",
          "Exits the loop completely",
          "Pauses the loop temporarily",
          "Returns a value from the loop"
        ],
        correctAnswer: 1,
        explanation: "The break statement terminates the loop and transfers control to the statement after the loop."
      },
      {
        id: "loop_q6",
        question: "What will this code print?\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)",
        options: ["0 1 2 3", "0 1 2", "0 1 2 4", "1 2 4"],
        correctAnswer: 1,
        explanation: "The loop prints i until i equals 3, at which point the break statement exits the loop."
      },
      {
        id: "loop_q7",
        question: "What is the output of this code?\ni = 0\nwhile i < 3:\n    print(i)\n    i += 1\nelse:\n    print('Loop finished')",
        options: ["0 1 2", "0 1 2 Loop finished", "Loop finished", "Error"],
        correctAnswer: 1,
        explanation: "The loop prints i and increments it until i < 3 is false, then the else block executes and prints 'Loop finished'."
      },
      {
        id: "loop_q8",
        question: "What will this code print?\nfor i in range(1, 6, 2):\n    print(i, end=' ')",
        options: ["1 2 3 4 5", "1 3 5", "2 4 6", "1 3 5 7"],
        correctAnswer: 1,
        explanation: "range(1, 6, 2) starts at 1, ends before 6, and increments by 2, giving 1, 3, 5."
      },
      {
        id: "loop_q9",
        question: "What will this code print?\nfor i in range(3):\n    pass\nprint('Done')",
        options: ["0 1 2 Done", "Done", "Nothing", "Error"],
        correctAnswer: 1,
        explanation: "The pass statement does nothing. The loop iterates, but nothing happens inside it, then 'Done' is printed."
      },
      {
        id: "loop_q10",
        question: "What is the purpose of the 'continue' statement in a loop?",
        options: [
          "To exit the loop completely",
          "To skip the rest of the current iteration and move to the next",
          "To pause the loop",
          "To repeat the current iteration"
        ],
        correctAnswer: 1,
        explanation: "The continue statement skips the rest of the current iteration and moves to the next iteration of the loop."
      }
    ]
  },
  {
    id: "functions",
    title: "Functions & Procedures",
    description: "Learn to create reusable blocks of code",
    content: `# Functions in Python

Functions are reusable blocks of code that perform specific tasks.

## Defining Functions
\`\`\`python
def greet(name):
    """This function greets the person passed in as a parameter"""
    print(f"Hello, {name}!")

# Calling the function
greet("Alice")  # Output: Hello, Alice!
\`\`\`

## Return Values
\`\`\`python
def add(a, b):
    """This function adds two numbers"""
    return a + b

result = add(5, 3)  # result = 8
\`\`\`

## Default Parameters
\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))  # Output: Hello, Bob!
print(greet("Bob", "Hi"))  # Output: Hi, Bob!
\`\`\`

## Keyword Arguments
\`\`\`python
def describe_person(name, age, city):
    return f"{name} is {age} years old and lives in {city}."

# You can specify which parameter gets which value
print(describe_person(age=30, city="New York", name="John"))
\`\`\`

## *args and **kwargs
\`\`\`python
# *args allows variable number of positional arguments
def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4))  # 10

# **kwargs allows variable number of keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="John", age=30, city="New York")
\`\`\`

## Lambda Functions
\`\`\`python
# Anonymous function
double = lambda x: x * 2
print(double(5))  # 10

# Often used with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
\`\`\`

## Variable Scope
\`\`\`python
x = 10  # Global variable

def my_func():
    y = 5  # Local variable
    print(x)  # Can access global variable
    print(y)  # Can access local variable

my_func()
print(x)  # Can access global variable
# print(y)  # Error! Cannot access local variable
\`\`\`
    `,
    questions: [
      {
        id: "func_q1",
        question: "What does the following function return?\ndef func():\n    x = 10\n    y = 20\n    return x + y",
        options: ["10", "20", "30", "None"],
        correctAnswer: 2,
        explanation: "The function returns the sum of x and y, which is 10 + 20 = 30."
      },
      {
        id: "func_q2",
        question: "What will this code print?\ndef greet(name, message='Hello'):\n    return f'{message}, {name}!'\n\nprint(greet('Alice'))",
        options: ["Alice, Hello!", "Hello, Alice!", "Hello!", "Alice!"],
        correctAnswer: 1,
        explanation: "The function uses the default value 'Hello' for the message parameter and returns 'Hello, Alice!'."
      },
      {
        id: "func_q3",
        question: "What is a lambda function in Python?",
        options: [
          "A function that calls itself",
          "A built-in mathematical function",
          "An anonymous, small function defined with the lambda keyword",
          "A function that takes multiple arguments"
        ],
        correctAnswer: 2,
        explanation: "Lambda functions are anonymous functions defined with the lambda keyword, typically used for small, one-time operations."
      },
      {
        id: "func_q4",
        question: "What will this code print?\ndef modify(lst):\n    lst.append(4)\n\nmy_list = [1, 2, 3]\nmodify(my_list)\nprint(my_list)",
        options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Error"],
        correctAnswer: 1,
        explanation: "List objects are passed by reference, so changes made within the function affect the original list. The append method adds 4 to the end of the list."
      },
      {
        id: "func_q5",
        question: "What does the *args parameter allow you to do?",
        options: [
          "Accept only string arguments",
          "Accept a variable number of positional arguments",
          "Accept only keyword arguments",
          "Accept only one argument at a time"
        ],
        correctAnswer: 1,
        explanation: "The *args parameter syntax allows a function to accept a variable number of positional arguments, which are collected into a tuple."
      },
      {
        id: "func_q6",
        question: "What is the purpose of the 'return' statement in a function?",
        options: [
          "To print output to the console",
          "To exit the function and optionally return a value",
          "To define a new variable",
          "To call another function"
        ],
        correctAnswer: 1,
        explanation: "The 'return' statement exits the function and can return a value to the caller."
      },
      {
        id: "func_q7",
        question: "What will this code print?\ndef outer_func():\n    x = 10\n    def inner_func():\n        nonlocal x\n        x = 20\n    inner_func()\n    return x\n\nprint(outer_func())",
        options: ["10", "20", "None", "Error"],
        correctAnswer: 1,
        explanation: "The 'nonlocal' keyword allows the inner function to modify the variable x in the outer function's scope, so x becomes 20."
      },
      {
        id: "func_q8",
        question: "What is the output of this code?\ndef func(x, y, z=0):\n    return x + y + z\n\nprint(func(1, 2))",
        options: ["1", "3", "0", "Error"],
        correctAnswer: 1,
        explanation: "The function is called with x=1 and y=2, and z uses its default value of 0, so the result is 1 + 2 + 0 = 3."
      },
      {
        id: "func_q9",
        question: "What happens when a function doesn't have a return statement?",
        options: ["It returns 0", "It returns None", "It causes an error", "It returns an empty string"],
        correctAnswer: 1,
        explanation: "If a function doesn't have a return statement or has a return statement without a value, it returns None."
      },
      {
        id: "func_q10",
        question: "What will the following code print?\ndef add(a, b=2, c=3):\n    return a + b + c\n\nprint(add(1, c=5))",
        options: ["6", "8", "9", "Error"],
        correctAnswer: 1,
        explanation: "The function is called with a=1, the default b=2, and c is overridden to 5, so the result is 1 + 2 + 5 = 8."
      }
    ]
  }
];
