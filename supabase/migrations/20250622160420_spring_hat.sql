/*
  # Insert sample data

  1. Sample Data
    - Create sample instructor profiles
    - Create sample courses with modules and lessons
    - Create sample challenges
    - Create sample events
    - Create sample enrollments

  Note: This migration should only be run in development/staging environments
*/

-- Insert sample instructor profiles
INSERT INTO profiles (id, email, full_name, role) VALUES
  ('11111111-1111-1111-1111-111111111111', 'instructor1@example.com', 'Dr. Sarah Johnson', 'instructor'),
  ('22222222-2222-2222-2222-222222222222', 'instructor2@example.com', 'Prof. Michael Chen', 'instructor'),
  ('33333333-3333-3333-3333-333333333333', 'instructor3@example.com', 'Alex Rodriguez', 'instructor'),
  ('44444444-4444-4444-4444-444444444444', 'instructor4@example.com', 'Dr. Emily Watson', 'instructor'),
  ('55555555-5555-5555-5555-555555555555', 'instructor5@example.com', 'David Kim', 'instructor'),
  ('66666666-6666-6666-6666-666666666666', 'instructor6@example.com', 'Lisa Thompson', 'instructor')
ON CONFLICT (id) DO NOTHING;

-- Insert sample courses
INSERT INTO courses (id, title, description, thumbnail_url, instructor_id, category, type, difficulty_level, duration_hours, price, is_published, tags, enrollment_count, rating) VALUES
  ('course-1', 'Complete React Development Bootcamp', 'Master React from basics to advanced concepts including hooks, context, and modern patterns.', 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800', '11111111-1111-1111-1111-111111111111', 'web-development', 'lecture', 'intermediate', 40, 99.99, true, ARRAY['react', 'javascript', 'frontend', 'hooks'], 1250, 4.8),
  ('course-2', 'Build a Full-Stack E-commerce App', 'Create a complete e-commerce application with authentication, payments, and deployment.', 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800', '33333333-3333-3333-3333-333333333333', 'web-development', 'coding', 'advanced', 80, 199.99, true, ARRAY['fullstack', 'nodejs', 'react', 'mongodb', 'stripe'], 567, 4.7),
  ('course-3', 'Machine Learning Fundamentals', 'Learn the basics of machine learning with Python, scikit-learn, and real-world projects.', 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', '44444444-4444-4444-4444-444444444444', 'ai-ml', 'lecture', 'beginner', 35, 79.99, true, ARRAY['machine-learning', 'python', 'data-science', 'ai'], 2100, 4.6),
  ('course-4', 'DevOps with Docker and Kubernetes', 'Master containerization and orchestration with Docker and Kubernetes for modern deployments.', 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', '55555555-5555-5555-5555-555555555555', 'devops', 'coding', 'intermediate', 45, 129.99, true, ARRAY['docker', 'kubernetes', 'devops', 'containers', 'deployment'], 780, 4.8),
  ('course-5', 'Blockchain Development with Solidity', 'Build decentralized applications and smart contracts on the Ethereum blockchain.', 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800', '66666666-6666-6666-6666-666666666666', 'blockchain', 'coding', 'advanced', 55, 179.99, true, ARRAY['blockchain', 'solidity', 'ethereum', 'smart-contracts', 'web3'], 445, 4.5)
ON CONFLICT (id) DO NOTHING;

-- Insert sample challenges
INSERT INTO challenges (id, title, description, thumbnail_url, instructor_id, category, type, difficulty_level, duration_hours, is_published, tags, enrollment_count, rating) VALUES
  ('challenge-1', 'Cybersecurity CTF Challenges', 'Hands-on cybersecurity training through capture-the-flag challenges and real-world scenarios.', 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800', '22222222-2222-2222-2222-222222222222', 'cybersecurity', 'ctf', 'advanced', 60, true, ARRAY['cybersecurity', 'ctf', 'penetration-testing', 'ethical-hacking'], 890, 4.9),
  ('challenge-2', 'Make Your Own: System Programming Challenges', 'Build fundamental tools from scratch: shell, HTTP server, database, and more. Learn by implementing core systems.', 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', '55555555-5555-5555-5555-555555555555', 'systems-programming', 'make_your_own', 'advanced', 120, true, ARRAY['systems-programming', 'c', 'python', 'shell', 'http-server', 'database', 'make-your-own'], 234, 4.9)
ON CONFLICT (id) DO NOTHING;

-- Insert sample events
INSERT INTO events (id, title, description, thumbnail_url, category, type, difficulty_level, start_date, end_date, registration_deadline, prize_pool, max_participants, is_active, is_featured, tags, rules, requirements, participant_count, organizer_id) VALUES
  ('event-1', 'Weekly Cybersecurity CTF Challenge', 'Test your cybersecurity skills in this week''s capture-the-flag competition. Solve challenges ranging from web exploitation to cryptography.', 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800', 'cybersecurity', 'weekly_challenge', 'intermediate', '2024-02-05T00:00:00Z', '2024-02-11T23:59:59Z', '2024-02-04T23:59:59Z', 500, 100, true, true, ARRAY['ctf', 'cybersecurity', 'web-exploitation', 'cryptography'], ARRAY['No collaboration between participants', 'All submissions must be original work', 'Use of automated tools is prohibited'], ARRAY['Basic knowledge of cybersecurity concepts', 'Familiarity with common security tools'], 87, '22222222-2222-2222-2222-222222222222'),
  ('event-2', 'Monthly Algorithm Championship', 'Compete in our monthly algorithm contest featuring complex data structures and optimization problems.', 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', 'algorithms', 'monthly_competition', 'advanced', '2024-02-01T00:00:00Z', '2024-02-29T23:59:59Z', '2024-01-31T23:59:59Z', 2000, 500, true, true, ARRAY['algorithms', 'data-structures', 'competitive-programming'], ARRAY['Solutions must be submitted in supported languages', 'Time limit: 2 hours per problem set'], ARRAY['Strong programming fundamentals', 'Knowledge of common algorithms'], 342, '11111111-1111-1111-1111-111111111111'),
  ('event-3', 'AI/ML Innovation Hackathon', '48-hour hackathon focused on innovative AI/ML applications. Build solutions for real-world problems.', 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', 'ai-ml', 'hackathon', 'intermediate', '2024-02-16T18:00:00Z', '2024-02-18T18:00:00Z', '2024-02-14T23:59:59Z', 5000, 200, true, true, ARRAY['ai', 'machine-learning', 'hackathon', 'innovation'], ARRAY['Teams of 1-4 people allowed', 'All code must be written during the event'], ARRAY['Experience with Python and ML frameworks', 'Understanding of machine learning concepts'], 156, '44444444-4444-4444-4444-444444444444')
ON CONFLICT (id) DO NOTHING;

-- Insert sample modules for React course
INSERT INTO modules (id, course_id, title, description, order_index, is_published) VALUES
  ('react-module-1', 'course-1', 'React Fundamentals', 'Learn the core concepts of React including components, props, and state.', 1, true),
  ('react-module-2', 'course-1', 'React Hooks Deep Dive', 'Master React hooks including useState, useEffect, useContext, and custom hooks.', 2, true),
  ('react-module-3', 'course-1', 'State Management & Context', 'Learn advanced state management patterns and React Context API.', 3, true)
ON CONFLICT (id) DO NOTHING;

-- Insert sample modules for challenges
INSERT INTO modules (id, course_id, title, description, order_index, is_published) VALUES
  ('ctf-module-1', 'challenge-1', 'Web Application Security', 'Learn to identify and exploit common web vulnerabilities.', 1, true),
  ('ctf-module-2', 'challenge-1', 'Cryptography Challenges', 'Master cryptographic concepts through hands-on challenges.', 2, true),
  ('make-your-own-module-1', 'challenge-2', 'System Programming Challenges', 'Build fundamental system tools from scratch.', 1, true),
  ('make-your-own-module-2', 'challenge-2', 'Network Programming Challenges', 'Create network tools and servers from the ground up.', 2, true)
ON CONFLICT (id) DO NOTHING;

-- Insert sample lessons
INSERT INTO lessons (id, module_id, title, description, content_type, content_text, duration_minutes, order_index, is_published) VALUES
  ('react-lesson-1', 'react-module-1', 'Introduction to React', 'What is React and why should you learn it? Understanding the virtual DOM and component-based architecture.', 'video', '# Introduction to React

React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta and the open-source community.

## Key Concepts:
- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient updates through a virtual representation of the DOM
- **Declarative**: Describe what the UI should look like for any given state

## Why React?
1. **Performance**: Virtual DOM enables efficient updates
2. **Reusability**: Components can be reused across different parts of your application
3. **Developer Experience**: Great tooling and debugging capabilities', 15, 1, true),
  ('react-lesson-2', 'react-module-1', 'Creating Your First Component', 'Learn how to create and use React components with JSX syntax.', 'video', '# Creating Your First Component

Components are the building blocks of React applications. Let''s create your first component!

## Function Components

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

## Using Components

```jsx
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
```', 20, 2, true),
  ('ctf-lesson-1', 'ctf-module-1', 'SQL Injection Challenge', 'Exploit SQL injection vulnerabilities to extract sensitive data.', 'code_challenge', '# SQL Injection Challenge

## Objective
Your goal is to extract the admin password from the vulnerable login form.

## Challenge Description
You''ve discovered a login form that appears to be vulnerable to SQL injection.

## Your Mission
1. Identify the SQL injection vulnerability
2. Bypass the authentication mechanism
3. Extract the admin user''s password from the database', 45, 1, true),
  ('make-your-own-lesson-1', 'make-your-own-module-1', 'Build Your Own Shell', 'Create a Unix shell with command execution, pipes, and process management.', 'code_challenge', '# Build Your Own Shell Challenge

## Objective
Create a functional Unix shell that can execute commands, handle pipes, manage processes, and provide a user-friendly command-line interface.

## What You''ll Build
Your shell should support:
- **Command Execution**: Run system commands and programs
- **Pipes**: Chain commands together with `|` operator
- **I/O Redirection**: Redirect input/output with `<`, `>`, `>>`
- **Background Processes**: Run commands in background with `&`', 180, 1, true)
ON CONFLICT (id) DO NOTHING;

-- Insert sample code challenges
INSERT INTO code_challenges (id, lesson_id, title, description, challenge_type, starter_code, github_template_repo, submission_requirements, time_limit_minutes, difficulty_level) VALUES
  ('challenge-shell-1', 'make-your-own-lesson-1', 'Build Your Own Shell', 'Create a basic Unix shell that can execute commands, handle pipes, and manage processes.', 'make_your_own', '#!/bin/bash
# Shell Implementation Starter Code
# Implement the following functions:

# Function to parse command line input
parse_command() {
    # TODO: Parse the input command and arguments
    echo "Parsing: $1"
}

# Main shell loop
main_loop() {
    while true; do
        echo -n "myshell> "
        read -r input
        
        if [[ "$input" == "exit" ]]; then
            break
        fi
        
        parse_command "$input"
    done
}

main_loop', 'https://github.com/learnhub-templates/shell-challenge', ARRAY['Implement a working shell in your preferred language', 'Include a README.md with build and run instructions', 'Add comprehensive test cases'], 180, 'advanced')
ON CONFLICT (id) DO NOTHING;

-- Insert sample test cases
INSERT INTO test_cases (id, challenge_id, name, description, test_command, points, is_hidden) VALUES
  ('test-basic-commands', 'challenge-shell-1', 'Basic Command Execution', 'Test if the shell can execute basic commands like ls, pwd, echo', 'npm test -- --testNamePattern="basic commands"', 25, false),
  ('test-pipes', 'challenge-shell-1', 'Pipe Support', 'Test if the shell supports piping between commands', 'npm test -- --testNamePattern="pipe support"', 30, false),
  ('test-redirection', 'challenge-shell-1', 'I/O Redirection', 'Test input/output redirection functionality', 'npm test -- --testNamePattern="redirection"', 25, true),
  ('test-background-processes', 'challenge-shell-1', 'Background Processes', 'Test ability to run processes in background', 'npm test -- --testNamePattern="background"', 20, true)
ON CONFLICT (id) DO NOTHING;