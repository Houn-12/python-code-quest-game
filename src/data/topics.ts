
export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

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
  }
  // ... More topics will be added here
];
