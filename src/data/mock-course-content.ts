import type { Module, Lesson, QuizQuestion } from '@/types';

// Mock content for React Development Bootcamp (Course ID: 1)
export const reactCourseModules: Module[] = [
  {
    id: 'react-module-1',
    course_id: 'course-1',
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React including components, props, and state.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-2',
    course_id: 'course-1',
    title: 'React Hooks Deep Dive',
    description: 'Master React hooks including useState, useEffect, useContext, and custom hooks.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-3',
    course_id: 'course-1',
    title: 'State Management & Context',
    description: 'Learn advanced state management patterns and React Context API.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: 'react-module-4',
    course_id: 'course-1',
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

// Mock content for Full-Stack E-commerce App (Course ID: 3)
export const ecommerceCourseModules: Module[] = [
  {
    id: 'ecommerce-module-1',
    course_id: 'course-2',
    title: 'Project Setup & Architecture',
    description: 'Set up the development environment and plan the application architecture.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-2',
    course_id: 'course-2',
    title: 'Backend API Development',
    description: 'Build RESTful APIs with Node.js, Express, and MongoDB.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-3',
    course_id: 'course-2',
    title: 'Frontend Development',
    description: 'Create a responsive React frontend with modern UI components.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
  {
    id: 'ecommerce-module-4',
    course_id: 'course-2',
    title: 'Payment Integration',
    description: 'Integrate Stripe for secure payment processing.',
    order_index: 4,
    is_published: true,
    created_at: '2024-01-05T09:15:00Z',
    updated_at: '2024-01-05T09:15:00Z',
  },
];

// Demo course modules
export const demoCourseModules: Module[] = [
  {
    id: 'demo-module-1',
    course_id: 'demo-course-1',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of web pages with HTML.',
    order_index: 1,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  {
    id: 'demo-module-2',
    course_id: 'demo-course-1',
    title: 'CSS Styling',
    description: 'Style your web pages with CSS and make them beautiful.',
    order_index: 2,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  {
    id: 'demo-module-3',
    course_id: 'demo-course-1',
    title: 'JavaScript Basics',
    description: 'Add interactivity to your web pages with JavaScript.',
    order_index: 3,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
];

export const demoCourseLessons: Lesson[] = [
  // HTML Module Lessons
  {
    id: 'demo-lesson-1',
    module_id: 'demo-module-1',
    title: 'What is HTML?',
    description: 'Introduction to HTML and its role in web development.',
    content_type: 'text',
    content_text: `# What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup.

## Key Concepts

- **Elements**: The building blocks of HTML pages
- **Tags**: Keywords surrounded by angle brackets
- **Attributes**: Additional information about elements
- **Structure**: How elements are organized

## Basic HTML Structure

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>
\`\`\`

## Common HTML Elements

- \`<h1>\` to \`<h6>\`: Headings
- \`<p>\`: Paragraphs
- \`<a>\`: Links
- \`<img>\`: Images
- \`<div>\`: Containers
- \`<span>\`: Inline containers

HTML is the foundation of all web pages. Every website you visit uses HTML to structure its content!`,
    duration_minutes: 15,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  {
    id: 'demo-lesson-2',
    module_id: 'demo-module-1',
    title: 'HTML Elements and Tags',
    description: 'Learn about different HTML elements and how to use them.',
    content_type: 'text',
    content_text: `# HTML Elements and Tags

HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.

## Element Syntax

\`\`\`html
<tagname>Content goes here...</tagname>
\`\`\`

## Common HTML Elements

### Headings
\`\`\`html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
\`\`\`

### Paragraphs
\`\`\`html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
\`\`\`

### Links
\`\`\`html
<a href="https://www.example.com">This is a link</a>
\`\`\`

### Images
\`\`\`html
<img src="image.jpg" alt="Description of image">
\`\`\`

### Lists
\`\`\`html
<!-- Unordered List -->
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
\`\`\`

## Attributes

HTML elements can have attributes that provide additional information:

- \`href\`: Specifies the URL for links
- \`src\`: Specifies the source for images
- \`alt\`: Provides alternative text for images
- \`class\`: Specifies CSS classes
- \`id\`: Provides a unique identifier

Understanding these basic elements will help you create structured, semantic web pages!`,
    duration_minutes: 20,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  {
    id: 'demo-lesson-3',
    module_id: 'demo-module-1',
    title: 'HTML Knowledge Check',
    description: 'Test your understanding of HTML basics.',
    content_type: 'quiz',
    duration_minutes: 10,
    order_index: 3,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  // CSS Module Lessons
  {
    id: 'demo-lesson-4',
    module_id: 'demo-module-2',
    title: 'Introduction to CSS',
    description: 'Learn what CSS is and how it styles web pages.',
    content_type: 'text',
    content_text: `# Introduction to CSS

CSS (Cascading Style Sheets) is used to style and layout web pages. It controls how HTML elements are displayed.

## What CSS Does

- **Colors**: Set text and background colors
- **Fonts**: Choose font families, sizes, and weights
- **Layout**: Position elements on the page
- **Spacing**: Control margins and padding
- **Responsive Design**: Make pages work on all devices

## CSS Syntax

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

## Example

\`\`\`css
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}

p {
    color: #333;
    line-height: 1.6;
    margin: 10px 0;
}
\`\`\`

## Adding CSS to HTML

### Inline CSS
\`\`\`html
<h1 style="color: blue;">Hello World</h1>
\`\`\`

### Internal CSS
\`\`\`html
<head>
    <style>
        h1 { color: blue; }
    </style>
</head>
\`\`\`

### External CSS (Recommended)
\`\`\`html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

CSS transforms plain HTML into beautiful, professional-looking websites!`,
    duration_minutes: 18,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  {
    id: 'demo-lesson-5',
    module_id: 'demo-module-2',
    title: 'CSS Selectors and Properties',
    description: 'Master CSS selectors and common properties.',
    content_type: 'text',
    content_text: `# CSS Selectors and Properties

CSS selectors are used to target HTML elements for styling. Different selectors give you different ways to select elements.

## Basic Selectors

### Element Selector
\`\`\`css
p {
    color: blue;
}
\`\`\`

### Class Selector
\`\`\`css
.highlight {
    background-color: yellow;
}
\`\`\`

### ID Selector
\`\`\`css
#header {
    font-size: 24px;
}
\`\`\`

## Common CSS Properties

### Text Properties
\`\`\`css
.text-style {
    color: #333;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
}
\`\`\`

### Background Properties
\`\`\`css
.background-style {
    background-color: #f0f0f0;
    background-image: url('image.jpg');
    background-size: cover;
    background-position: center;
}
\`\`\`

### Box Model Properties
\`\`\`css
.box-style {
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
}
\`\`\`

### Layout Properties
\`\`\`css
.layout-style {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
    left: 20px;
}
\`\`\`

## Combining Selectors

\`\`\`css
/* Multiple classes */
.header.large {
    font-size: 32px;
}

/* Descendant selector */
.container p {
    margin-bottom: 15px;
}

/* Hover state */
button:hover {
    background-color: #007bff;
    color: white;
}
\`\`\`

Mastering selectors and properties gives you complete control over your website's appearance!`,
    duration_minutes: 25,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  // JavaScript Module Lessons
  {
    id: 'demo-lesson-6',
    module_id: 'demo-module-3',
    title: 'JavaScript Basics',
    description: 'Introduction to JavaScript programming language.',
    content_type: 'text',
    content_text: `# JavaScript Basics

JavaScript is a programming language that adds interactivity to web pages. It can update content, control multimedia, animate images, and much more.

## What JavaScript Can Do

- **Dynamic Content**: Change HTML content and attributes
- **User Interaction**: Respond to clicks, form submissions, etc.
- **Animations**: Create smooth transitions and effects
- **Data Processing**: Calculate, validate, and manipulate data
- **API Communication**: Fetch data from servers

## JavaScript Syntax

### Variables
\`\`\`javascript
// Modern way (recommended)
let name = "John";
const age = 25;

// Older way
var city = "New York";
\`\`\`

### Data Types
\`\`\`javascript
// String
let message = "Hello World";

// Number
let count = 42;
let price = 19.99;

// Boolean
let isActive = true;
let isComplete = false;

// Array
let colors = ["red", "green", "blue"];

// Object
let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};
\`\`\`

### Functions
\`\`\`javascript
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function (modern)
const multiply = (a, b) => a * b;
\`\`\`

## Adding JavaScript to HTML

### Inline JavaScript
\`\`\`html
<button onclick="alert('Hello!')">Click me</button>
\`\`\`

### Internal JavaScript
\`\`\`html
<script>
    console.log("Hello from JavaScript!");
</script>
\`\`\`

### External JavaScript (Recommended)
\`\`\`html
<script src="script.js"></script>
\`\`\`

JavaScript brings your web pages to life with dynamic, interactive features!`,
    duration_minutes: 22,
    order_index: 1,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  {
    id: 'demo-lesson-7',
    module_id: 'demo-module-3',
    title: 'DOM Manipulation',
    description: 'Learn how to interact with HTML elements using JavaScript.',
    content_type: 'text',
    content_text: `# DOM Manipulation

The DOM (Document Object Model) represents the HTML document as a tree of objects. JavaScript can change the DOM to update the web page dynamically.

## Selecting Elements

### By ID
\`\`\`javascript
const element = document.getElementById("myId");
\`\`\`

### By Class
\`\`\`javascript
const elements = document.getElementsByClassName("myClass");
const element = document.querySelector(".myClass");
const allElements = document.querySelectorAll(".myClass");
\`\`\`

### By Tag
\`\`\`javascript
const paragraphs = document.getElementsByTagName("p");
const firstParagraph = document.querySelector("p");
\`\`\`

## Changing Content

### Text Content
\`\`\`javascript
const heading = document.getElementById("title");
heading.textContent = "New Title";
heading.innerHTML = "<strong>Bold Title</strong>";
\`\`\`

### Attributes
\`\`\`javascript
const image = document.querySelector("img");
image.src = "new-image.jpg";
image.alt = "New description";
\`\`\`

### Styles
\`\`\`javascript
const box = document.getElementById("box");
box.style.backgroundColor = "blue";
box.style.width = "200px";
box.style.display = "none";
\`\`\`

## Adding and Removing Elements

### Creating Elements
\`\`\`javascript
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
document.body.appendChild(newParagraph);
\`\`\`

### Removing Elements
\`\`\`javascript
const elementToRemove = document.getElementById("remove-me");
elementToRemove.remove();
\`\`\`

## Event Handling

### Click Events
\`\`\`javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
\`\`\`

### Form Events
\`\`\`javascript
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted!");
});
\`\`\`

### Input Events
\`\`\`javascript
const input = document.getElementById("myInput");
input.addEventListener("input", function() {
    console.log("Input value:", input.value);
});
\`\`\`

## Practical Example

\`\`\`javascript
// Change button text when clicked
const toggleButton = document.getElementById("toggle");
let isOn = false;

toggleButton.addEventListener("click", function() {
    if (isOn) {
        toggleButton.textContent = "Turn On";
        toggleButton.style.backgroundColor = "gray";
    } else {
        toggleButton.textContent = "Turn Off";
        toggleButton.style.backgroundColor = "green";
    }
    isOn = !isOn;
});
\`\`\`

DOM manipulation is the key to creating interactive web applications!`,
    duration_minutes: 28,
    order_index: 2,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
  },
  {
    id: 'demo-lesson-8',
    module_id: 'demo-module-3',
    title: 'JavaScript Final Quiz',
    description: 'Test your JavaScript knowledge.',
    content_type: 'quiz',
    duration_minutes: 15,
    order_index: 3,
    is_published: true,
    created_at: '2024-01-01T08:00:00Z',
    updated_at: '2024-01-01T08:00:00Z',
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

// Demo course quiz questions
export const demoCourseQuizQuestions: QuizQuestion[] = [
  // HTML Quiz
  {
    id: 'demo-quiz-1',
    lesson_id: 'demo-lesson-3',
    question: 'What does HTML stand for?',
    type: 'multiple_choice',
    options: [
      'HyperText Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlink and Text Markup Language'
    ],
    correct_answer: 'HyperText Markup Language',
    explanation: 'HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages.',
    order_index: 1,
  },
  {
    id: 'demo-quiz-2',
    lesson_id: 'demo-lesson-3',
    question: 'Which HTML element is used for the largest heading?',
    type: 'multiple_choice',
    options: ['<h1>', '<h6>', '<heading>', '<header>'],
    correct_answer: '<h1>',
    explanation: 'The <h1> element represents the largest heading, while <h6> is the smallest.',
    order_index: 2,
  },
  {
    id: 'demo-quiz-3',
    lesson_id: 'demo-lesson-3',
    question: 'HTML elements must always have closing tags.',
    type: 'true_false',
    correct_answer: 'false',
    explanation: 'Some HTML elements are self-closing (void elements) like <img>, <br>, and <input>.',
    order_index: 3,
  },
  // JavaScript Quiz
  {
    id: 'demo-quiz-4',
    lesson_id: 'demo-lesson-8',
    question: 'Which keyword is used to declare a constant in JavaScript?',
    type: 'multiple_choice',
    options: ['var', 'let', 'const', 'constant'],
    correct_answer: 'const',
    explanation: 'The "const" keyword is used to declare constants in JavaScript.',
    order_index: 1,
  },
  {
    id: 'demo-quiz-5',
    lesson_id: 'demo-lesson-8',
    question: 'What does DOM stand for?',
    type: 'multiple_choice',
    options: [
      'Document Object Model',
      'Data Object Management',
      'Dynamic Object Method',
      'Document Oriented Model'
    ],
    correct_answer: 'Document Object Model',
    explanation: 'DOM stands for Document Object Model, which represents the HTML document as a tree of objects.',
    order_index: 2,
  },
  {
    id: 'demo-quiz-6',
    lesson_id: 'demo-lesson-8',
    question: 'JavaScript can only run in web browsers.',
    type: 'true_false',
    correct_answer: 'false',
    explanation: 'JavaScript can run in many environments including web browsers, servers (Node.js), mobile apps, and desktop applications.',
    order_index: 3,
  },
];

// Combine all mock data
export const getAllMockModules = (): Module[] => [
  ...reactCourseModules,
  ...ecommerceCourseModules,
  ...demoCourseModules,
];

export const getAllMockLessons = (): Lesson[] => [
  ...reactCourseLessons,
  ...ecommerceCourseLessons,
  ...demoCourseLessons,
];

export const getAllMockQuizQuestions = (): QuizQuestion[] => [
  ...reactQuizQuestions,
  ...demoCourseQuizQuestions,
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