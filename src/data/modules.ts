
export interface Module {
  id: number;
  title: string;
  description: string;
  content: string;
  examples: CodeExample[];
  challenge: Challenge;
}

export interface CodeExample {
  title: string;
  code: string;
  explanation: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  initialCode: string;
  expectedOutput: string;
  hints: string[];
  solution: string;
  testCases: TestCase[];
}

export interface TestCase {
  input?: string;
  expectedOutput: string;
  explanation: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: string;
}

export const pythonModules: Module[] = [
  {
    id: 0,
    title: "Variables and Data Types",
    description: "Learn about variables and basic data types in Python",
    content: `
# Variables and Data Types
      
In Python, variables are used to store data that can be used and manipulated throughout your program.
Unlike some other programming languages, you don't need to declare a variable's type before using it.

## Common Data Types

1. **Integers** - Whole numbers like 3, 100, or -5
2. **Floats** - Decimal numbers like 3.14 or -0.001
3. **Strings** - Text enclosed in quotes like "hello" or 'Python'
4. **Booleans** - True or False values

## Creating Variables

In Python, you create a variable by assigning a value to it using the equals sign (=):
    `,
    examples: [
      {
        title: "Basic Variable Assignment",
        code: `# Integer variable
age = 25

# Float variable
height = 1.75

# String variable
name = "Python Learner"

# Boolean variable
is_student = True

# Print variables
print(name)
print(age)
print(height)
print(is_student)`,
        explanation: "This example shows how to create variables of different data types and print their values."
      },
      {
        title: "Type Conversion",
        code: `# Convert string to integer
number_str = "42"
number_int = int(number_str)
print(number_int)  # Outputs: 42

# Convert integer to string
count = 10
count_str = str(count)
print("The count is " + count_str)  # Outputs: The count is 10

# Convert string to float
pi_str = "3.14159"
pi_float = float(pi_str)
print(pi_float)  # Outputs: 3.14159`,
        explanation: "This example demonstrates how to convert between different data types using functions like int(), str(), and float()."
      }
    ],
    challenge: {
      id: "variables_challenge",
      title: "Variable Swap Challenge",
      description: "Create a program that swaps the values of two variables without using a temporary third variable.",
      initialCode: `# TODO: Swap the values of a and b without using a third variable
a = 5
b = 10

# Your code here


print("a =", a)  # Should print: a = 10
print("b =", b)  # Should print: b = 5`,
      expectedOutput: "a = 10\nb = 5",
      hints: [
        "You can use mathematical operations to swap the values",
        "Think about using addition and subtraction",
        "First add both values together in one variable"
      ],
      solution: `a = 5
b = 10

a = a + b  # a becomes 15
b = a - b  # b becomes 5
a = a - b  # a becomes 10

print("a =", a)
print("b =", b)`,
      testCases: [
        {
          expectedOutput: "a = 10\nb = 5",
          explanation: "The values of a and b should be swapped"
        }
      ]
    }
  },
  {
    id: 1,
    title: "Conditional Statements",
    description: "Learn about if, elif, and else statements in Python",
    content: `
# Conditional Statements
      
Conditional statements let your program make decisions based on certain conditions.
They allow different code to execute depending on whether a condition is True or False.

## Types of Conditional Statements

1. **if statement** - Executes a block of code if a condition is True
2. **elif statement** - Checks another condition if the previous conditions were False
3. **else statement** - Executes when all previous conditions are False

## Comparison Operators

- **==** Equal to
- **!=** Not equal to
- **>** Greater than
- **<** Less than
- **>=** Greater than or equal to
- **<=** Less than or equal to
    `,
    examples: [
      {
        title: "Basic If Statement",
        code: `# Check if age is 18 or older
age = 20

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`,
        explanation: "This example checks if the age variable is 18 or greater, and prints different messages accordingly."
      },
      {
        title: "If-Elif-Else Chain",
        code: `# Grade calculator
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print("Your grade is:", grade)`,
        explanation: "This example demonstrates a chain of if-elif-else statements to assign a letter grade based on a numerical score."
      }
    ],
    challenge: {
      id: "conditions_challenge",
      title: "Leap Year Checker",
      description: "Create a program that checks if a given year is a leap year. A leap year is divisible by 4, except for century years which must be divisible by 400.",
      initialCode: `# TODO: Check if the year is a leap year
year = 2024

# Your code here


# Expected output for 2024: "2024 is a leap year"
# Expected output for 2100: "2100 is not a leap year"
# Expected output for 2000: "2000 is a leap year"`,
      expectedOutput: "2024 is a leap year",
      hints: [
        "A year is a leap year if divisible by 4",
        "Century years (ending in 00) must be divisible by 400 to be leap years",
        "Use the modulo operator % to check if a number is divisible by another"
      ],
      solution: `year = 2024

if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    print(f"{year} is a leap year")
else:
    print(f"{year} is not a leap year")`,
      testCases: [
        {
          input: "2024",
          expectedOutput: "2024 is a leap year",
          explanation: "2024 is divisible by 4 and not a century year"
        },
        {
          input: "2100",
          expectedOutput: "2100 is not a leap year",
          explanation: "2100 is a century year not divisible by 400"
        },
        {
          input: "2000",
          expectedOutput: "2000 is a leap year",
          explanation: "2000 is a century year divisible by 400"
        }
      ]
    }
  },
  {
    id: 2,
    title: "Loops",
    description: "Learn about for and while loops in Python",
    content: `
# Loops in Python
      
Loops allow you to execute a block of code multiple times. They're essential for automating repetitive tasks.

## Types of Loops

1. **For Loops** - Execute a block of code for each item in a sequence
2. **While Loops** - Execute a block of code as long as a condition is True

## Loop Control Statements

- **break** - Exits the loop completely
- **continue** - Skips the current iteration and moves to the next one
- **else** - Executes after the loop completes normally (not when broken by a break statement)
    `,
    examples: [
      {
        title: "For Loop with Range",
        code: `# Print numbers from 1 to 5
for i in range(1, 6):
    print(i)

# Output:
# 1
# 2
# 3
# 4
# 5`,
        explanation: "This example uses a for loop with the range function to print numbers from 1 to 5."
      },
      {
        title: "While Loop",
        code: `# Countdown from 5 to 1
count = 5
while count > 0:
    print(count)
    count -= 1  # Same as count = count - 1
    
print("Blast off!")

# Output:
# 5
# 4
# 3
# 2
# 1
# Blast off!`,
        explanation: "This example uses a while loop to count down from 5 to 1, then prints a final message."
      }
    ],
    challenge: {
      id: "loops_challenge",
      title: "FizzBuzz Challenge",
      description: "Create a program that prints the numbers from 1 to 20. But for multiples of 3, print 'Fizz' instead of the number, and for multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.",
      initialCode: `# TODO: Implement the FizzBuzz challenge
# Print numbers from 1 to 20
# If number is divisible by 3, print "Fizz" instead
# If number is divisible by 5, print "Buzz" instead
# If number is divisible by both 3 and 5, print "FizzBuzz" instead

# Your code here
`,
      expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz",
      hints: [
        "Use a for loop with range(1, 21) to iterate through numbers 1 to 20",
        "Use if statements to check if the number is divisible by 3 and/or 5",
        "Remember to use the modulo operator % to check for divisibility"
      ],
      solution: `for number in range(1, 21):
    if number % 3 == 0 and number % 5 == 0:
        print("FizzBuzz")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("Buzz")
    else:
        print(number)`,
      testCases: [
        {
          expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n16\n17\nFizz\n19\nBuzz",
          explanation: "The output should match the FizzBuzz pattern for numbers 1 through 20"
        }
      ]
    }
  }
];

export const achievements: Achievement[] = [
  {
    id: "first_challenge",
    title: "First Steps",
    description: "Complete your first coding challenge",
    icon: "🌟",
    condition: "Complete any challenge"
  },
  {
    id: "perfect_score",
    title: "Perfect Coder",
    description: "Get a perfect score on any challenge",
    icon: "🏆",
    condition: "Score 100% on any challenge"
  },
  {
    id: "all_basics",
    title: "Python Basics Master",
    description: "Complete all the basic Python modules",
    icon: "🐍",
    condition: "Complete the first 3 modules"
  },
  {
    id: "leaderboard",
    title: "Competitor",
    description: "Make it to the leaderboard",
    icon: "📊",
    condition: "Have your name on the leaderboard"
  },
  {
    id: "hint_free",
    title: "Independent Coder",
    description: "Complete a challenge without using any hints",
    icon: "🧠",
    condition: "Complete a challenge without using hints"
  }
];
