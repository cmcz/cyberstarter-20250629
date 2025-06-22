/*
  # Add Demo Free Course

  1. New Data
    - Free introductory web development course
    - Complete with modules and lessons
    - Includes text content and quiz questions

  2. Course Structure
    - Course: Introduction to Web Development
    - Module 1: HTML Fundamentals (3 lessons)
    - Module 2: CSS Styling (2 lessons)  
    - Module 3: JavaScript Basics (3 lessons)
*/

-- Insert demo course
INSERT INTO courses (
  id,
  title,
  description,
  thumbnail_url,
  instructor_id,
  category,
  type,
  difficulty_level,
  duration_hours,
  price,
  is_published,
  tags,
  enrollment_count,
  rating,
  created_at,
  updated_at
) VALUES (
  'demo-course-1',
  'Introduction to Web Development',
  'A free introductory course covering HTML, CSS, and JavaScript basics. Perfect for beginners starting their web development journey.',
  'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
  '77777777-7777-7777-7777-777777777777',
  'web-development',
  'lecture',
  'beginner',
  8,
  0,
  true,
  ARRAY['html', 'css', 'javascript', 'beginner', 'free'],
  3420,
  4.9,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail_url = EXCLUDED.thumbnail_url,
  instructor_id = EXCLUDED.instructor_id,
  category = EXCLUDED.category,
  type = EXCLUDED.type,
  difficulty_level = EXCLUDED.difficulty_level,
  duration_hours = EXCLUDED.duration_hours,
  price = EXCLUDED.price,
  is_published = EXCLUDED.is_published,
  tags = EXCLUDED.tags,
  enrollment_count = EXCLUDED.enrollment_count,
  rating = EXCLUDED.rating,
  updated_at = EXCLUDED.updated_at;

-- Insert course modules
INSERT INTO modules (
  id,
  course_id,
  title,
  description,
  order_index,
  is_published,
  created_at,
  updated_at
) VALUES 
(
  'demo-module-1',
  'demo-course-1',
  'HTML Fundamentals',
  'Learn the building blocks of web pages with HTML.',
  1,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
(
  'demo-module-2',
  'demo-course-1',
  'CSS Styling',
  'Style your web pages with CSS and make them beautiful.',
  2,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
(
  'demo-module-3',
  'demo-course-1',
  'JavaScript Basics',
  'Add interactivity to your web pages with JavaScript.',
  3,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  course_id = EXCLUDED.course_id,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  order_index = EXCLUDED.order_index,
  is_published = EXCLUDED.is_published,
  updated_at = EXCLUDED.updated_at;

-- Insert lessons
INSERT INTO lessons (
  id,
  module_id,
  title,
  description,
  content_type,
  content_text,
  duration_minutes,
  order_index,
  is_published,
  created_at,
  updated_at
) VALUES 
-- HTML Module Lessons
(
  'demo-lesson-1',
  'demo-module-1',
  'What is HTML?',
  'Introduction to HTML and its role in web development.',
  'text',
  '# What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using markup.

## Key Concepts

- **Elements**: The building blocks of HTML pages
- **Tags**: Keywords surrounded by angle brackets
- **Attributes**: Additional information about elements
- **Structure**: How elements are organized

## Basic HTML Structure

```html
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
```

## Common HTML Elements

- `<h1>` to `<h6>`: Headings
- `<p>`: Paragraphs
- `<a>`: Links
- `<img>`: Images
- `<div>`: Containers
- `<span>`: Inline containers

HTML is the foundation of all web pages. Every website you visit uses HTML to structure its content!',
  15,
  1,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
(
  'demo-lesson-2',
  'demo-module-1',
  'HTML Elements and Tags',
  'Learn about different HTML elements and how to use them.',
  'text',
  '# HTML Elements and Tags

HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.

## Element Syntax

```html
<tagname>Content goes here...</tagname>
```

## Common HTML Elements

### Headings
```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```

### Paragraphs
```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### Links
```html
<a href="https://www.example.com">This is a link</a>
```

### Images
```html
<img src="image.jpg" alt="Description of image">
```

### Lists
```html
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
```

## Attributes

HTML elements can have attributes that provide additional information:

- `href`: Specifies the URL for links
- `src`: Specifies the source for images
- `alt`: Provides alternative text for images
- `class`: Specifies CSS classes
- `id`: Provides a unique identifier

Understanding these basic elements will help you create structured, semantic web pages!',
  20,
  2,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
(
  'demo-lesson-3',
  'demo-module-1',
  'HTML Knowledge Check',
  'Test your understanding of HTML basics.',
  'quiz',
  NULL,
  10,
  3,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
-- CSS Module Lessons
(
  'demo-lesson-4',
  'demo-module-2',
  'Introduction to CSS',
  'Learn what CSS is and how it styles web pages.',
  'text',
  '# Introduction to CSS

CSS (Cascading Style Sheets) is used to style and layout web pages. It controls how HTML elements are displayed.

## What CSS Does

- **Colors**: Set text and background colors
- **Fonts**: Choose font families, sizes, and weights
- **Layout**: Position elements on the page
- **Spacing**: Control margins and padding
- **Responsive Design**: Make pages work on all devices

## CSS Syntax

```css
selector {
    property: value;
    property: value;
}
```

## Example

```css
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
```

## Adding CSS to HTML

### Inline CSS
```html
<h1 style="color: blue;">Hello World</h1>
```

### Internal CSS
```html
<head>
    <style>
        h1 { color: blue; }
    </style>
</head>
```

### External CSS (Recommended)
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

CSS transforms plain HTML into beautiful, professional-looking websites!',
  18,
  1,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
(
  'demo-lesson-5',
  'demo-module-2',
  'CSS Selectors and Properties',
  'Master CSS selectors and common properties.',
  'text',
  '# CSS Selectors and Properties

CSS selectors are used to target HTML elements for styling. Different selectors give you different ways to select elements.

## Basic Selectors

### Element Selector
```css
p {
    color: blue;
}
```

### Class Selector
```css
.highlight {
    background-color: yellow;
}
```

### ID Selector
```css
#header {
    font-size: 24px;
}
```

## Common CSS Properties

### Text Properties
```css
.text-style {
    color: #333;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
}
```

### Background Properties
```css
.background-style {
    background-color: #f0f0f0;
    background-image: url(''image.jpg'');
    background-size: cover;
    background-position: center;
}
```

### Box Model Properties
```css
.box-style {
    width: 300px;
    height: 200px;
    padding: 20px;
    margin: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
}
```

### Layout Properties
```css
.layout-style {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
    left: 20px;
}
```

## Combining Selectors

```css
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
```

Mastering selectors and properties gives you complete control over your website''s appearance!',
  25,
  2,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
-- JavaScript Module Lessons
(
  'demo-lesson-6',
  'demo-module-3',
  'JavaScript Basics',
  'Introduction to JavaScript programming language.',
  'text',
  '# JavaScript Basics

JavaScript is a programming language that adds interactivity to web pages. It can update content, control multimedia, animate images, and much more.

## What JavaScript Can Do

- **Dynamic Content**: Change HTML content and attributes
- **User Interaction**: Respond to clicks, form submissions, etc.
- **Animations**: Create smooth transitions and effects
- **Data Processing**: Calculate, validate, and manipulate data
- **API Communication**: Fetch data from servers

## JavaScript Syntax

### Variables
```javascript
// Modern way (recommended)
let name = "John";
const age = 25;

// Older way
var city = "New York";
```

### Data Types
```javascript
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
```

### Functions
```javascript
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
```

## Adding JavaScript to HTML

### Inline JavaScript
```html
<button onclick="alert(''Hello!'')">Click me</button>
```

### Internal JavaScript
```html
<script>
    console.log("Hello from JavaScript!");
</script>
```

### External JavaScript (Recommended)
```html
<script src="script.js"></script>
```

JavaScript brings your web pages to life with dynamic, interactive features!',
  22,
  1,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
(
  'demo-lesson-7',
  'demo-module-3',
  'DOM Manipulation',
  'Learn how to interact with HTML elements using JavaScript.',
  'text',
  '# DOM Manipulation

The DOM (Document Object Model) represents the HTML document as a tree of objects. JavaScript can change the DOM to update the web page dynamically.

## Selecting Elements

### By ID
```javascript
const element = document.getElementById("myId");
```

### By Class
```javascript
const elements = document.getElementsByClassName("myClass");
const element = document.querySelector(".myClass");
const allElements = document.querySelectorAll(".myClass");
```

### By Tag
```javascript
const paragraphs = document.getElementsByTagName("p");
const firstParagraph = document.querySelector("p");
```

## Changing Content

### Text Content
```javascript
const heading = document.getElementById("title");
heading.textContent = "New Title";
heading.innerHTML = "<strong>Bold Title</strong>";
```

### Attributes
```javascript
const image = document.querySelector("img");
image.src = "new-image.jpg";
image.alt = "New description";
```

### Styles
```javascript
const box = document.getElementById("box");
box.style.backgroundColor = "blue";
box.style.width = "200px";
box.style.display = "none";
```

## Adding and Removing Elements

### Creating Elements
```javascript
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
document.body.appendChild(newParagraph);
```

### Removing Elements
```javascript
const elementToRemove = document.getElementById("remove-me");
elementToRemove.remove();
```

## Event Handling

### Click Events
```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
```

### Form Events
```javascript
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted!");
});
```

### Input Events
```javascript
const input = document.getElementById("myInput");
input.addEventListener("input", function() {
    console.log("Input value:", input.value);
});
```

## Practical Example

```javascript
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
```

DOM manipulation is the key to creating interactive web applications!',
  28,
  2,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
),
(
  'demo-lesson-8',
  'demo-module-3',
  'JavaScript Final Quiz',
  'Test your JavaScript knowledge.',
  'quiz',
  NULL,
  15,
  3,
  true,
  '2024-01-01T08:00:00Z',
  '2024-01-01T08:00:00Z'
) ON CONFLICT (id) DO UPDATE SET
  module_id = EXCLUDED.module_id,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  content_type = EXCLUDED.content_type,
  content_text = EXCLUDED.content_text,
  duration_minutes = EXCLUDED.duration_minutes,
  order_index = EXCLUDED.order_index,
  is_published = EXCLUDED.is_published,
  updated_at = EXCLUDED.updated_at;