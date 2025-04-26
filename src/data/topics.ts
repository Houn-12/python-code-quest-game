
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
      }
    ]
  },
  {
    id: "lists_tuples",
    title: "Lists & Tuples",
    description: "Learn about Python's built-in sequence data structures",
    content: `# Lists and Tuples in Python

Lists and tuples are ordered collections that can hold multiple items.

## Lists
Lists are mutable (can be changed) and created with square brackets.

### Creating Lists
\`\`\`python
fruits = ["apple", "banana", "cherry"]
mixed_list = [1, "Hello", True, 3.14]
empty_list = []
nested_list = [1, [2, 3], 4]
\`\`\`

### Accessing Elements
\`\`\`python
fruits = ["apple", "banana", "cherry"]

# Indexing (starts at 0)
first_fruit = fruits[0]  # "apple"
last_fruit = fruits[-1]  # "cherry"

# Slicing
some_fruits = fruits[0:2]  # ["apple", "banana"]
\`\`\`

### Modifying Lists
\`\`\`python
fruits = ["apple", "banana", "cherry"]

# Add items
fruits.append("orange")  # Add to the end
fruits.insert(1, "mango")  # Insert at position 1

# Remove items
fruits.remove("banana")  # Remove by value
popped = fruits.pop()  # Remove and return last item
del fruits[0]  # Delete by index
\`\`\`

### List Methods
\`\`\`python
numbers = [3, 1, 4, 1, 5, 9]

# Sorting
numbers.sort()  # Sort in-place
sorted_numbers = sorted(numbers)  # Return sorted copy

# Other methods
length = len(numbers)  # Get length
count = numbers.count(1)  # Count occurrences
numbers.reverse()  # Reverse the list
index = numbers.index(5)  # Find index of value
\`\`\`

## Tuples
Tuples are immutable (cannot be changed) and created with parentheses.

### Creating Tuples
\`\`\`python
coordinates = (10, 20)
mixed_tuple = (1, "Hello", True)
single_item = (42,)  # Note the comma
empty_tuple = ()
\`\`\`

### Accessing Tuple Elements
\`\`\`python
coordinates = (10, 20, 30)
x = coordinates[0]
y = coordinates[1]

# Tuple unpacking
x, y, z = coordinates
\`\`\`

### Tuples vs Lists
- Tuples are immutable (cannot be modified)
- Tuples are generally faster than lists
- Tuples can be used as dictionary keys, lists cannot
- Use tuples for fixed collections, lists for collections that might change
\`\`\`python
# This works
point = (10, 20)
points_dict = {point: "origin"}

# This would raise an error
# list_key = [10, 20]
# points_dict = {list_key: "origin"}  # TypeError
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
        question: "What's the main difference between a list and a tuple in Python?",
        options: [
          "Lists can contain mixed data types, tuples cannot",
          "Lists are ordered, tuples are not",
          "Lists are mutable, tuples are immutable",
          "Lists can be indexed, tuples cannot"
        ],
        correctAnswer: 2,
        explanation: "The key difference is that lists are mutable (can be changed after creation), while tuples are immutable (cannot be changed after creation)."
      },
      {
        id: "list_q3",
        question: "What will this code print?\ntuple1 = (1, 2, 3)\ntuple1[0] = 4\nprint(tuple1)",
        options: ["(4, 2, 3)", "(1, 2, 3)", "Error", "(1, 4, 3)"],
        correctAnswer: 2,
        explanation: "This will raise a TypeError because tuples are immutable, and their elements cannot be changed after creation."
      },
      {
        id: "list_q4",
        question: "What is the result of this operation?\nlist1 = [1, 2, 3]\nlist2 = [4, 5]\nprint(list1 + list2)",
        options: ["[1, 2, 3, 4, 5]", "[5, 7, 8]", "Error", "[1, 2, 3, [4, 5]]"],
        correctAnswer: 0,
        explanation: "The + operator with lists performs concatenation, joining the two lists together to form a new list [1, 2, 3, 4, 5]."
      },
      {
        id: "list_q5",
        question: "What will this code print?\nnames = ['Alice', 'Bob', 'Charlie']\nnames.append(['Dave', 'Eve'])\nprint(len(names))",
        options: ["3", "4", "5", "Error"],
        correctAnswer: 1,
        explanation: "The append method adds a single element to the end of the list. Since ['Dave', 'Eve'] is added as one element (a nested list), the final length is 4."
      }
    ]
  },
  {
    id: "dictionaries_sets",
    title: "Dictionaries & Sets",
    description: "Learn about Python's key-value and unique collection data structures",
    content: `# Dictionaries and Sets in Python

Dictionaries and sets are unordered collections in Python.

## Dictionaries
Dictionaries are collections of key-value pairs.

### Creating Dictionaries
\`\`\`python
# Creating a dictionary
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Empty dictionary
empty_dict = {}

# Dictionary with mixed key types
mixed_dict = {1: "one", "two": 2, (3, 4): "tuple key"}
\`\`\`

### Accessing Dictionary Values
\`\`\`python
person = {"name": "John", "age": 30, "city": "New York"}

# Accessing values by key
name = person["name"]  # "John"

# Using get() method (safer, returns None if key doesn't exist)
country = person.get("country")  # None
country = person.get("country", "USA")  # "USA" (default value)
\`\`\`

### Modifying Dictionaries
\`\`\`python
person = {"name": "John", "age": 30}

# Adding or updating key-value pairs
person["city"] = "New York"  # Add new key
person["age"] = 31  # Update existing key

# Removing items
del person["city"]  # Remove by key
age = person.pop("age")  # Remove and return value
person.clear()  # Remove all items
\`\`\`

### Dictionary Methods
\`\`\`python
person = {"name": "John", "age": 30, "city": "New York"}

# Common methods
keys = person.keys()  # dict_keys(['name', 'age', 'city'])
values = person.values()  # dict_values(['John', 30, 'New York'])
items = person.items()  # dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])

# Check if key exists
has_name = "name" in person  # True
\`\`\`

## Sets
Sets are unordered collections of unique elements.

### Creating Sets
\`\`\`python
# Creating a set
fruits = {"apple", "banana", "cherry"}

# Empty set (cannot use {}, as that creates an empty dict)
empty_set = set()

# Creating a set from a list (removes duplicates)
numbers = set([1, 2, 2, 3, 4, 4, 5])  # {1, 2, 3, 4, 5}
\`\`\`

### Set Operations
\`\`\`python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Union (combines elements from both sets)
union_set = set1 | set2  # {1, 2, 3, 4, 5, 6}
# or
union_set = set1.union(set2)

# Intersection (elements common to both sets)
intersection_set = set1 & set2  # {3, 4}
# or
intersection_set = set1.intersection(set2)

# Difference (elements in set1 but not in set2)
difference_set = set1 - set2  # {1, 2}
# or
difference_set = set1.difference(set2)

# Symmetric difference (elements in either set, but not both)
sym_diff = set1 ^ set2  # {1, 2, 5, 6}
# or
sym_diff = set1.symmetric_difference(set2)
\`\`\`

### Modifying Sets
\`\`\`python
fruits = {"apple", "banana"}

# Adding elements
fruits.add("cherry")
fruits.update(["orange", "mango"])

# Removing elements
fruits.remove("apple")  # Raises error if not found
fruits.discard("grape")  # No error if not found
popped = fruits.pop()  # Remove and return arbitrary element
fruits.clear()  # Remove all elements
\`\`\`
    `,
    questions: [
      {
        id: "dict_q1",
        question: "What will be the output of the following code?\ndict1 = {'a': 1, 'b': 2}\nprint(dict1.get('c', 3))",
        options: ["None", "3", "{'c': 3}", "Error"],
        correctAnswer: 1,
        explanation: "The get() method returns the value for the specified key if it exists, or the default value provided (3 in this case) if the key doesn't exist."
      },
      {
        id: "dict_q2",
        question: "What happens when you try to access a key that doesn't exist in a dictionary using square brackets?",
        options: ["Returns None", "Returns an empty value", "Raises a KeyError", "Adds the key with a None value"],
        correctAnswer: 2,
        explanation: "Accessing a non-existent key with dict[key] syntax raises a KeyError."
      },
      {
        id: "dict_q3",
        question: "Which of the following accurately describes a Python set?",
        options: [
          "An ordered collection of key-value pairs",
          "An ordered collection of unique elements",
          "An unordered collection of unique elements",
          "An unordered collection of elements that can contain duplicates"
        ],
        correctAnswer: 2,
        explanation: "A set in Python is an unordered collection of unique elements. It doesn't allow duplicates and doesn't maintain insertion order."
      },
      {
        id: "dict_q4",
        question: "What will this code produce?\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\nprint(set1 & set2)",
        options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}", "Error"],
        correctAnswer: 1,
        explanation: "The & operator performs set intersection, returning a new set with elements common to both sets. In this case, only 3 appears in both sets."
      },
      {
        id: "dict_q5",
        question: "How do you create an empty set in Python?",
        options: ["{}", "set()", "[]", "dict()"],
        correctAnswer: 1,
        explanation: "An empty set is created using set(). Using {} creates an empty dictionary, not an empty set."
      }
    ]
  },
  {
    id: "string_manipulation",
    title: "String Manipulation",
    description: "Learn advanced techniques for working with text in Python",
    content: `# String Manipulation in Python

Strings in Python are sequences of characters and offer many built-in methods for manipulation.

## String Basics
\`\`\`python
# Creating strings
single_quotes = 'Hello'
double_quotes = "Hello"
triple_quotes = '''Multiple
line string'''

# String length
length = len("Hello")  # 5

# Accessing characters
first_char = "Hello"[0]  # 'H'
last_char = "Hello"[-1]  # 'o'
\`\`\`

## String Slicing
\`\`\`python
text = "Python Programming"

# Slicing: [start:end:step]
substring = text[0:6]  # "Python"
every_other = text[::2]  # "Pto rgamn"
reversed_text = text[::-1]  # "gnimmargorP nohtyP"
\`\`\`

## String Methods
\`\`\`python
text = "Python Programming"

# Case conversion
upper_case = text.upper()  # "PYTHON PROGRAMMING"
lower_case = text.lower()  # "python programming"
title_case = text.title()  # "Python Programming"

# Finding text
position = text.find("Pro")  # 7
count = text.count("m")  # 2

# Checking properties
starts_with = text.startswith("Py")  # True
ends_with = text.endswith("ing")  # True
is_alpha = text.isalpha()  # False (because of the space)
is_digit = "123".isdigit()  # True
\`\`\`

## String Modification
\`\`\`python
# Replacing
text = "Hello World"
new_text = text.replace("World", "Python")  # "Hello Python"

# Stripping whitespace
text = "   spacious   "
stripped = text.strip()  # "spacious"
left_strip = text.lstrip()  # "spacious   "
right_strip = text.rstrip()  # "   spacious"

# Joining and splitting
words = ["Python", "is", "fun"]
sentence = " ".join(words)  # "Python is fun"

text = "Python,is,fun"
parts = text.split(",")  # ["Python", "is", "fun"]
lines = "Line1\\nLine2\\nLine3".splitlines()  # ["Line1", "Line2", "Line3"]
\`\`\`

## String Formatting
\`\`\`python
# Old style formatting
name = "Alice"
age = 25
old_format = "Hello, %s. You are %d years old." % (name, age)

# str.format() method
format_method = "Hello, {}. You are {} years old.".format(name, age)
format_named = "Hello, {name}. You are {age} years old.".format(name=name, age=age)

# f-strings (Python 3.6+)
f_string = f"Hello, {name}. You are {age} years old."

# Formatting options
pi = 3.14159
formatted_pi = f"Pi is approximately {pi:.2f}"  # "Pi is approximately 3.14"
\`\`\`

## Raw Strings
\`\`\`python
# Raw strings ignore escape characters
normal_string = "First line\\nSecond line"  # Will have a newline
raw_string = r"First line\\nSecond line"  # Will contain \\n literally
\`\`\`
    `,
    questions: [
      {
        id: "str_q1",
        question: "What is the output of the following?\ns = 'python'\nprint(s[2:5])",
        options: ["pyt", "yth", "tho", "hon"],
        correctAnswer: 2,
        explanation: "String slicing s[2:5] starts at index 2 (third character) and ends at index 4 (5-1), giving 'tho'."
      },
      {
        id: "str_q2",
        question: "What does the strip() method do in Python?",
        options: [
          "Removes all whitespace characters from the string",
          "Removes leading and trailing whitespace characters",
          "Removes specified characters from the string",
          "Splits the string into a list of characters"
        ],
        correctAnswer: 1,
        explanation: "The strip() method returns a copy of the string with leading and trailing whitespace removed."
      },
      {
        id: "str_q3",
        question: "What will the following code print?\ntext = 'Python is fun'\nprint(text.replace('fun', 'awesome').upper())",
        options: ["PYTHON IS FUN", "PYTHON IS AWESOME", "Python is awesome", "python is awesome"],
        correctAnswer: 1,
        explanation: "First, 'fun' is replaced with 'awesome', resulting in 'Python is awesome'. Then, upper() converts all characters to uppercase, giving 'PYTHON IS AWESOME'."
      },
      {
        id: "str_q4",
        question: "What is the output of this code?\nprint(len('Hello\\nWorld'))",
        options: ["10", "11", "9", "12"],
        correctAnswer: 1,
        explanation: "The string contains 'Hello', a newline character (\\n), and 'World'. The newline is counted as a single character, so the total length is 11."
      },
      {
        id: "str_q5",
        question: "What will this f-string expression evaluate to?\nname = 'Alice'\nage = 30\nprint(f'{name} will be {age+5} in 5 years')",
        options: [
          "Alice will be 35 in 5 years",
          "Alice will be age+5 in 5 years",
          "name will be 35 in 5 years",
          "Error"
        ],
        correctAnswer: 0,
        explanation: "F-strings allow you to embed expressions inside string literals. The variables name and age+5 are evaluated and inserted into the string."
      }
    ]
  },
  {
    id: "file_handling",
    title: "File Handling",
    description: "Learn how to read from and write to files in Python",
    content: `# File Handling in Python

Python provides built-in functions and methods for working with files.

## Opening Files
\`\`\`python
# Basic file opening
file = open("example.txt", "r")  # Open for reading
file.close()  # Always close files when done

# Using with statement (recommended)
with open("example.txt", "r") as file:
    # File operations here
    pass  # File is automatically closed after the block
\`\`\`

## File Opening Modes
- \`"r"\`: Read (default)
- \`"w"\`: Write (creates new file or truncates existing)
- \`"a"\`: Append (creates new file or appends to existing)
- \`"x"\`: Exclusive creation (fails if file exists)
- \`"b"\`: Binary mode
- \`"t"\`: Text mode (default)
- \`"+"\`: Open for updating (reading & writing)

## Reading Files
\`\`\`python
# Reading the entire file at once
with open("example.txt", "r") as file:
    content = file.read()  # Read entire content as a string

# Reading line by line
with open("example.txt", "r") as file:
    first_line = file.readline()  # Read a single line
    
# Reading all lines into a list
with open("example.txt", "r") as file:
    lines = file.readlines()  # List of lines with newline characters

# Iterating over lines (memory efficient)
with open("example.txt", "r") as file:
    for line in file:
        print(line, end="")  # Process each line
\`\`\`

## Writing to Files
\`\`\`python
# Writing text
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")  # Write a string
    file.write("Another line.")
    
# Writing multiple lines
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)  # Write multiple lines
\`\`\`

## Appending to Files
\`\`\`python
with open("log.txt", "a") as file:
    file.write("New log entry\\n")  # Adds to the end of the file
\`\`\`

## Working with Binary Files
\`\`\`python
# Reading binary data
with open("image.jpg", "rb") as file:
    image_data = file.read()
    
# Writing binary data
with open("copy.jpg", "wb") as file:
    file.write(image_data)
\`\`\`

## File Position
\`\`\`python
with open("example.txt", "r") as file:
    content = file.read(5)  # Read first 5 characters
    position = file.tell()  # Get current position
    file.seek(0)  # Move back to the beginning
    content_again = file.read(5)  # Read first 5 characters again
\`\`\`

## Error Handling with Files
\`\`\`python
try:
    with open("nonexistent.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File does not exist!")
except IOError:
    print("An error occurred while reading the file!")
\`\`\`
    `,
    questions: [
      {
        id: "file_q1",
        question: "Which mode should be used to open a file for writing, without truncating existing content?",
        options: ["r", "w", "a", "x"],
        correctAnswer: 2,
        explanation: "The 'a' (append) mode opens the file for writing without truncating existing content, positioning the file pointer at the end of the file."
      },
      {
        id: "file_q2",
        question: "What happens if you open a non-existent file in 'r' mode?",
        options: [
          "The file is created",
          "Nothing happens",
          "A FileNotFoundError is raised",
          "The file is created but empty"
        ],
        correctAnswer: 2,
        explanation: "Opening a non-existent file in read mode ('r') raises a FileNotFoundError because there's no file to read from."
      },
      {
        id: "file_q3",
        question: "What is the advantage of using the 'with' statement when working with files?",
        options: [
          "It makes the code run faster",
          "It automatically closes the file when the block exits",
          "It prevents file corruption",
          "It allows for multi-threading"
        ],
        correctAnswer: 1,
        explanation: "The main advantage of the 'with' statement is that it ensures the file is properly closed when the block exits, even if an exception occurs."
      },
      {
        id: "file_q4",
        question: "What does the following code do?\nwith open('file.txt', 'w') as f:\n    f.write('Hello')",
        options: [
          "Appends 'Hello' to file.txt",
          "Creates a new file.txt with 'Hello' or overwrites if it exists",
          "Reads 'Hello' from file.txt",
          "Raises an error if file.txt doesn't exist"
        ],
        correctAnswer: 1,
        explanation: "Opening a file in 'w' mode creates a new file if it doesn't exist, or truncates (empties) the file if it exists, then writes 'Hello' to it."
      },
      {
        id: "file_q5",
        question: "What method would you use to read a file line by line efficiently in Python?",
        options: [
          "file.read().split('\\n')",
          "file.readlines()",
          "Iterating over the file object directly",
          "file.readline() in a loop"
        ],
        correctAnswer: 2,
        explanation: "Iterating over the file object directly (for line in file) is the most memory-efficient way to read a file line by line, as it doesn't load the entire file into memory."
      }
    ]
  }
];
