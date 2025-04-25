import { Topic } from './topics';

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
      }
    ]
  },
  {
    id: "strings",
    title: "Strings & Text Processing",
    description: "Explore string operations and text manipulation",
    content: `# Strings in Python

Strings are sequences of characters enclosed in quotes (single, double or triple quotes).

## Basic String Operations
\`\`\`python
greeting = "Hello, World!"
name = 'Python'

# Length of a string
length = len(greeting)  # 13

# Accessing characters
first_char = greeting[0]  # 'H'
last_char = greeting[-1]  # '!'

# String concatenation
message = greeting + " I am " + name
\`\`\`

## String Methods
\`\`\`python
text = "Python Programming"

# Common methods
upper_case = text.upper()  # "PYTHON PROGRAMMING"
lower_case = text.lower()  # "python programming"
replaced = text.replace("Python", "Java")  # "Java Programming"
\`\`\`
    `,
    questions: [
      {
        id: "str_q1",
        question: "What is the output of the following?\ns = 'python'\nprint(s[2:5])",
        options: ["pyt", "yth", "tho", "hon"],
        correctAnswer: 2, 
        explanation: "String slicing s[2:5] starts at index 2 and ends at index 4 (5-1), giving 'tho'."
      },
      {
        id: "str_q2",
        question: "Which method removes whitespace from both ends of a string?",
        options: ["strip()", "trim()", "remove()", "clean()"],
        correctAnswer: 0,
        explanation: "The strip() method removes whitespace from both ends of a string."
      },
      {
        id: "str_q3",
        question: "What does the following code print?\nprint('Python'.find('th'))",
        options: ["True", "2", "-1", "Error"],
        correctAnswer: 1,
        explanation: "The find() method returns the index where the substring starts. 'th' starts at index 2."
      },
      {
        id: "str_q4",
        question: "How do you check if a string starts with a specific substring?",
        options: ["str.beginswith('sub')", "str.startswith('sub')", "str.starts('sub')", "str.begins('sub')"],
        correctAnswer: 1,
        explanation: "The startswith() method checks if a string starts with a specified substring."
      },
      {
        id: "str_q5",
        question: "What is the output of 'Python'.count('y')?",
        options: ["0", "1", "2", "Error"],
        correctAnswer: 1,
        explanation: "The count() method returns how many times a substring appears in a string. 'y' appears once."
      }
    ]
  },
  {
    id: "lists",
    title: "Lists & Collections",
    description: "Learn about Python's built-in list data structure",
    content: `# Lists in Python

Lists are ordered, mutable collections of items that can store different types of data.

## Creating Lists
\`\`\`python
fruits = ["apple", "banana", "cherry"]
mixed_list = [1, "Hello", True, 3.14]
empty_list = []
\`\`\`

## Accessing Elements
\`\`\`python
first_fruit = fruits[0]  # "apple"
last_fruit = fruits[-1]  # "cherry"

# Slicing
some_fruits = fruits[0:2]  # ["apple", "banana"]
\`\`\`

## Modifying Lists
\`\`\`python
fruits.append("orange")  # Add to the end
fruits.insert(1, "mango")  # Insert at position 1
fruits.remove("banana")  # Remove by value
popped = fruits.pop()  # Remove and return last item
\`\`\`
    `,
    questions: [
      {
        id: "list_q1",
        question: "What is the output of the following code?\nlist = [1, 2, 3, 4, 5]\nprint(list[1:4])",
        options: ["[1, 2, 3, 4]", "[2, 3, 4]", "[1, 2, 3]", "[2, 3, 4, 5]"],
        correctAnswer: 1,
        explanation: "List slicing [1:4] starts at index 1 and ends at index 3 (4-1), giving [2, 3, 4]."
      },
      {
        id: "list_q2",
        question: "Which method adds an element to the end of a list?",
        options: ["list.add()", "list.append()", "list.insert()", "list.extend()"],
        correctAnswer: 1,
        explanation: "The append() method adds an element to the end of a list."
      },
      {
        id: "list_q3",
        question: "What happens when you use the + operator with two lists?",
        options: ["Addition of elements", "Error", "Concatenation", "The second list replaces the first"],
        correctAnswer: 2,
        explanation: "The + operator with lists performs concatenation, joining the two lists together."
      },
      {
        id: "list_q4",
        question: "Which of these is NOT a valid way to create an empty list?",
        options: ["list()", "[]", "list = []", "list.new()"],
        correctAnswer: 3,
        explanation: "list.new() is not a valid method in Python. The correct ways are list(), [], or variable = []."
      },
      {
        id: "list_q5",
        question: "What does the following code return?\nnum = [10, 20, 30, 40]\nnum.pop(1)",
        options: ["10", "20", "30", "40"],
        correctAnswer: 1,
        explanation: "The pop(1) method removes and returns the element at index 1, which is 20."
      }
    ]
  },
  {
    id: "dictionaries",
    title: "Dictionaries & Mapping",
    description: "Work with key-value pairs using Python dictionaries",
    content: `# Dictionaries in Python

Dictionaries are unordered collections of key-value pairs, optimized for retrieving data.

## Creating Dictionaries
\`\`\`python
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
empty_dict = {}
\`\`\`

## Accessing Values
\`\`\`python
name = person["name"]  # "John"
age = person.get("age")  # 30
# Using get with default value
country = person.get("country", "USA")  # "USA" (default value)
\`\`\`

## Modifying Dictionaries
\`\`\`python
# Adding or updating
person["email"] = "john@example.com"
person["age"] = 31

# Removing
del person["city"]
email = person.pop("email")  # Removes and returns the value
\`\`\`
    `,
    questions: [
      {
        id: "dict_q1",
        question: "How do you create an empty dictionary in Python?",
        options: ["dict()", "{}", "[]", "None of these"],
        correctAnswer: 1,
        explanation: "Both dict() and {} create an empty dictionary, but {} is more common."
      },
      {
        id: "dict_q2",
        question: "What happens if you try to access a key that doesn't exist in a dictionary?",
        options: ["Returns None", "Returns False", "Raises a KeyError", "Creates the key with a None value"],
        correctAnswer: 2,
        explanation: "Accessing a non-existent key with dict[key] raises a KeyError."
      },
      {
        id: "dict_q3",
        question: "Which method returns a list of all keys in a dictionary?",
        options: ["dict.keys()", "dict.getkeys()", "dict.allkeys()", "dict.fetchkeys()"],
        correctAnswer: 0,
        explanation: "The keys() method returns a view object displaying all keys in the dictionary."
      },
      {
        id: "dict_q4",
        question: "What is the output of this code?\nd = {'a': 1, 'b': 2}\nprint(list(d.items())[0])",
        options: ["'a'", "1", "('a', 1)", "['a', 1]"],
        correctAnswer: 2,
        explanation: "d.items() returns key-value tuples, and list(d.items())[0] gives the first tuple ('a', 1)."
      },
      {
        id: "dict_q5",
        question: "Can a dictionary have a list as a key?",
        options: ["Yes", "No", "Only if the list is empty", "Only if the list contains strings"],
        correctAnswer: 1,
        explanation: "No, dictionary keys must be immutable (hashable), and lists are mutable."
      }
    ]
  },
  {
    id: "conditionals",
    title: "Conditionals & Logic",
    description: "Learn about decision making with if-else statements",
    content: `# Conditionals in Python

Conditional statements let your program make decisions based on certain conditions.

## If-Else Statements
\`\`\`python
age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
\`\`\`

## Multiple Conditions
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

## Logical Operators
\`\`\`python
# and, or, not
if age >= 18 and score >= 60:
    print("Eligible")

if not is_banned:
    print("Welcome")
\`\`\`
    `,
    questions: [
      {
        id: "cond_q1",
        question: "What is the result of the condition: 5 > 3 and 10 <= 10?",
        options: ["True", "False", "5", "Error"],
        correctAnswer: 0,
        explanation: "Both conditions (5 > 3) and (10 <= 10) are True, so True and True equals True."
      },
      {
        id: "cond_q2",
        question: "Which of these is NOT a logical operator in Python?",
        options: ["and", "or", "not", "then"],
        correctAnswer: 3,
        explanation: "'then' is not a logical operator in Python. The logical operators are 'and', 'or', and 'not'."
      },
      {
        id: "cond_q3",
        question: "What is the value of x after this code?\nx = 5\nif x > 10:\n    x = 7\nelse:\n    x = 3",
        options: ["5", "7", "3", "10"],
        correctAnswer: 2,
        explanation: "Since x is 5 and 5 is not greater than 10, the else block executes and x becomes 3."
      },
      {
        id: "cond_q4",
        question: "What will this print?\nx = True\ny = False\nif x or y:\n    print('Yes')\nelse:\n    print('No')",
        options: ["Yes", "No", "True", "False"],
        correctAnswer: 0,
        explanation: "x is True, so x or y is True, causing the if block to execute and print 'Yes'."
      },
      {
        id: "cond_q5",
        question: "Which operator checks for inequality in Python?",
        options: ["<>", "!=", "~=", "not="],
        correctAnswer: 1,
        explanation: "The != operator checks if two values are not equal to each other."
      }
    ]
  },
  {
    id: "loops",
    title: "Loops & Iteration",
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
        question: "How do you exit a loop prematurely in Python?",
        options: ["exit()", "stop", "break", "return"],
        correctAnswer: 2,
        explanation: "The break statement is used to exit a loop prematurely."
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
        question: "Which loop is suitable when you don't know beforehand how many iterations you need?",
        options: ["for loop", "while loop", "do-while loop", "infinite loop"],
        correctAnswer: 1,
        explanation: "A while loop is ideal when you don't know the number of iterations in advance."
      },
      {
        id: "loop_q5",
        question: "What does the continue statement do in a loop?",
        options: [
          "Ends the loop completely",
          "Skips the current iteration and continues with the next",
          "Pauses the loop until a condition is met",
          "Restarts the loop from the beginning"
        ],
        correctAnswer: 1,
        explanation: "The continue statement skips the rest of the code in the current iteration and moves to the next iteration."
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

## Variable Scope
\`\`\`python
# Global vs Local Variables
x = 10  # Global variable

def my_func():
    y = 5  # Local variable
    print(x)  # Can access global variable
    print(y)  # Can access local variable

my_func()
print(x)  # Can access global variable
# print(y)  # Error! Cannot access local variable outside function
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
        question: "How do you define a function in Python?",
        options: ["function name():", "def name():", "define name():", "func name():"],
        correctAnswer: 1,
        explanation: "In Python, you define a function using the 'def' keyword followed by the function name and parentheses."
      },
      {
        id: "func_q3",
        question: "What is a docstring in Python?",
        options: [
          "A special type of comment inside a function",
          "A type of function that documents code",
          "A string literal specified as the first statement in a function",
          "A Python library for documentation"
        ],
        correctAnswer: 2,
        explanation: "A docstring is a string literal that appears as the first statement in a function, providing documentation."
      },
      {
        id: "func_q4",
        question: "What happens if you call a function without required arguments?",
        options: ["The function uses default values", "The function returns None", "The function skips those parameters", "You get a TypeError"],
        correctAnswer: 3,
        explanation: "Calling a function without providing required arguments will raise a TypeError."
      },
      {
        id: "func_q5",
        question: "Which statement is used to return a value from a function?",
        options: ["yield", "return", "send", "output"],
        correctAnswer: 1,
        explanation: "The return statement is used to exit a function and return a value to the caller."
      }
    ]
  },
  {
    id: "error_handling",
    title: "Error Handling",
    description: "Learn to handle errors and exceptions in Python",
    content: `# Error Handling in Python

Exception handling allows your program to respond to errors gracefully.

## Try-Except Blocks
\`\`\`python
try:
    # Code that might cause an exception
    result = 10 / 0
except ZeroDivisionError:
    # Handle the specific error
    print("Cannot divide by zero!")
\`\`\`

## Multiple Except Blocks
\`\`\`python
try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
\`\`\`

## The Finally Clause
\`\`\`python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("The file was not found")
finally:
    # This code always executes, regardless of an exception
    print("Operation attempted")
    # Close the file if it was opened
    if 'file' in locals():
        file.close()
\`\`\`

## Raising Exceptions
\`\`\`python
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 120:
        raise ValueError("Age is too high")
    return age
\`\`\`
    `,
    questions: [
      {
        id: "err_q1",
        question: "What is the purpose of the 'try' and 'except' blocks in Python?",
        options: [
          "To try different solutions until one works",
          "To handle errors and exceptions gracefully",
          "To optimize code execution",
          "To test code performance"
        ],
        correctAnswer: 1,
        explanation: "Try-except blocks are used to catch and handle exceptions, allowing the program to continue execution despite errors."
      },
      {
        id: "err_q2",
        question: "Which of these is NOT a built-in exception in Python?",
        options: ["ValueError", "SyntaxError", "ErrorException", "TypeError"],
        correctAnswer: 2,
        explanation: "ErrorException is not a built-in exception in Python. The others are standard exception types."
      },
      {
        id: "err_q3",
        question: "What will the following code print?\ntry:\n    print(1/0)\nexcept ZeroDivisionError:\n    print('Error')\nfinally:\n    print('Done')",
        options: ["Error", "Done", "Error\\nDone", "ZeroDivisionError\\nDone"],
        correctAnswer: 2,
        explanation: "The code first prints 'Error' when catching the ZeroDivisionError, then 'Done' in the finally block."
      },
      {
        id: "err_q4",
        question: "How do you create a custom exception in Python?",
        options: [
          "Define a function that returns an error message",
          "Create a class that inherits from the Exception class",
          "Use the raise keyword with a string message",
          "Add a special comment with #exception"
        ],
        correctAnswer: 1,
        explanation: "Custom exceptions are created by defining a class that inherits from the built-in Exception class."
      },
      {
        id: "err_q5",
        question: "Which statement is used to manually raise an exception?",
        options: ["throw", "raise", "except", "error"],
        correctAnswer: 1,
        explanation: "The 'raise' statement is used to manually raise an exception in Python."
      }
    ]
  },
  {
    id: "modules",
    title: "Modules & Packages",
    description: "Learn to organize code and use Python's extensive library ecosystem",
    content: `# Modules and Packages in Python

Modules are Python files containing code, while packages are directories containing multiple modules.

## Importing Modules
\`\`\`python
# Import an entire module
import math
result = math.sqrt(16)  # 4.0

# Import specific functions
from math import sqrt, pi
result = sqrt(16)  # 4.0
print(pi)  # 3.141592653589793

# Import with alias
import math as m
result = m.sqrt(16)  # 4.0
\`\`\`

## Creating Your Own Modules
File: \`mymodule.py\`:
\`\`\`python
# My custom module
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159
\`\`\`

Using your module:
\`\`\`python
import mymodule
message = mymodule.greet("World")
print(message)  # Hello, World!
\`\`\`

## Standard Library
Python comes with a rich standard library:
\`\`\`python
import random
random_number = random.randint(1, 10)

import datetime
current_date = datetime.datetime.now()

import os
files = os.listdir(".")
\`\`\`
    `,
    questions: [
      {
        id: "mod_q1",
        question: "How do you import the 'random' module in Python?",
        options: ["include random", "import random", "using random", "#include random"],
        correctAnswer: 1,
        explanation: "In Python, modules are imported using the 'import' keyword, so 'import random' is correct."
      },
      {
        id: "mod_q2",
        question: "Which statement allows you to import a specific function from a module?",
        options: ["import math.sqrt", "from math get sqrt", "from math include sqrt", "from math import sqrt"],
        correctAnswer: 3,
        explanation: "The syntax 'from module_name import function_name' imports specific functions or variables from a module."
      },
      {
        id: "mod_q3",
        question: "What is a Python package?",
        options: [
          "A compressed file containing Python code",
          "A directory with an __init__.py file and potentially other Python modules",
          "A library downloaded from PyPI",
          "A module with more than 1000 lines of code"
        ],
        correctAnswer: 1,
        explanation: "A package is a directory containing Python modules and an __init__.py file (optional in Python 3.3+)."
      },
      {
        id: "mod_q4",
        question: "What does the following code do?\nimport math as m",
        options: [
          "Imports only the math function from the math module",
          "Creates a math module",
          "Imports the math module and gives it the alias 'm'",
          "Imports a module called 'm' from the math package"
        ],
        correctAnswer: 2,
        explanation: "This imports the entire math module but allows you to access it using the shorter name 'm'."
      },
      {
        id: "mod_q5",
        question: "Which of these is NOT part of the Python Standard Library?",
        options: ["os", "sys", "math", "tensorflow"],
        correctAnswer: 3,
        explanation: "TensorFlow is a third-party library for machine learning, not part of the Python Standard Library."
      }
    ]
  }
];
