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
  ...ecommerceCourseModules,
];

export const getAllMockLessons = (): Lesson[] => [
  ...reactCourseLessons,
  ...ecommerceCourseLessons,
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