import type { CodeChallenge, TestCase } from '@/types';

export const mockCodeChallenges: CodeChallenge[] = [
  {
    id: 'challenge-shell-1',
    lesson_id: 'make-your-own-lesson-1',
    title: 'Build Your Own Shell',
    description: 'Create a basic Unix shell that can execute commands, handle pipes, and manage processes.',
    challenge_type: 'make_your_own',
    starter_code: `#!/bin/bash
# Shell Implementation Starter Code
# Implement the following functions:

# Function to parse command line input
parse_command() {
    # TODO: Parse the input command and arguments
    echo "Parsing: $1"
}

# Function to execute commands
execute_command() {
    # TODO: Execute the parsed command
    echo "Executing: $1"
}

# Main shell loop
main_loop() {
    while true; do
        echo -n "myshell> "
        read -r input
        
        # Exit condition
        if [[ "$input" == "exit" ]]; then
            break
        fi
        
        # TODO: Implement command execution
        parse_command "$input"
        execute_command "$input"
    done
}

# Start the shell
main_loop`,
    test_cases: [
      {
        id: 'test-basic-commands',
        name: 'Basic Command Execution',
        description: 'Test if the shell can execute basic commands like ls, pwd, echo',
        test_command: 'npm test -- --testNamePattern="basic commands"',
        points: 25,
        is_hidden: false,
      },
      {
        id: 'test-pipes',
        name: 'Pipe Support',
        description: 'Test if the shell supports piping between commands',
        test_command: 'npm test -- --testNamePattern="pipe support"',
        points: 30,
        is_hidden: false,
      },
      {
        id: 'test-redirection',
        name: 'I/O Redirection',
        description: 'Test input/output redirection functionality',
        test_command: 'npm test -- --testNamePattern="redirection"',
        points: 25,
        is_hidden: true,
      },
      {
        id: 'test-background-processes',
        name: 'Background Processes',
        description: 'Test ability to run processes in background',
        test_command: 'npm test -- --testNamePattern="background"',
        points: 20,
        is_hidden: true,
      },
    ],
    github_template_repo: 'https://github.com/learnhub-templates/shell-challenge',
    submission_requirements: [
      'Implement a working shell in your preferred language (C, Python, Bash, etc.)',
      'Include a README.md with build and run instructions',
      'Add comprehensive test cases',
      'Handle basic commands, pipes, and I/O redirection',
      'Implement proper error handling',
    ],
    time_limit_minutes: 180,
    difficulty_level: 'advanced',
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-01-20T10:00:00Z',
  },
  {
    id: 'challenge-http-server-1',
    lesson_id: 'make-your-own-lesson-2',
    title: 'Build Your Own HTTP Server',
    description: 'Create a basic HTTP server that can handle GET/POST requests, serve static files, and implement basic routing.',
    challenge_type: 'make_your_own',
    starter_code: `// HTTP Server Implementation Starter Code
const net = require('net');
const fs = require('fs');
const path = require('path');

class HTTPServer {
    constructor(port = 8080) {
        this.port = port;
        this.routes = new Map();
    }

    // TODO: Implement HTTP request parsing
    parseRequest(data) {
        // Parse HTTP request headers and body
        return {
            method: '',
            path: '',
            headers: {},
            body: ''
        };
    }

    // TODO: Implement HTTP response formatting
    formatResponse(statusCode, headers, body) {
        // Format HTTP response with proper headers
        return '';
    }

    // TODO: Implement route handling
    addRoute(method, path, handler) {
        // Add route handler
    }

    // TODO: Implement static file serving
    serveStaticFile(filePath) {
        // Serve static files from filesystem
    }

    // Start the server
    start() {
        const server = net.createServer((socket) => {
            socket.on('data', (data) => {
                // TODO: Handle incoming HTTP requests
                const request = this.parseRequest(data.toString());
                // Process request and send response
            });
        });

        server.listen(this.port, () => {
            console.log(\`Server running on port \${this.port}\`);
        });
    }
}

// Example usage
const server = new HTTPServer(8080);
server.addRoute('GET', '/', (req, res) => {
    return { statusCode: 200, body: 'Hello World!' };
});
server.start();`,
    test_cases: [
      {
        id: 'test-basic-get',
        name: 'Basic GET Requests',
        description: 'Test if server handles basic GET requests',
        test_command: 'npm test -- --testNamePattern="GET requests"',
        points: 20,
        is_hidden: false,
      },
      {
        id: 'test-post-requests',
        name: 'POST Request Handling',
        description: 'Test POST request parsing and handling',
        test_command: 'npm test -- --testNamePattern="POST requests"',
        points: 25,
        is_hidden: false,
      },
      {
        id: 'test-static-files',
        name: 'Static File Serving',
        description: 'Test serving static HTML, CSS, JS files',
        test_command: 'npm test -- --testNamePattern="static files"',
        points: 25,
        is_hidden: false,
      },
      {
        id: 'test-routing',
        name: 'Dynamic Routing',
        description: 'Test dynamic route handling with parameters',
        test_command: 'npm test -- --testNamePattern="routing"',
        points: 30,
        is_hidden: true,
      },
    ],
    github_template_repo: 'https://github.com/learnhub-templates/http-server-challenge',
    submission_requirements: [
      'Implement HTTP server from scratch (no Express/frameworks)',
      'Handle GET and POST requests',
      'Serve static files with proper MIME types',
      'Implement basic routing system',
      'Include comprehensive tests',
      'Add proper error handling and status codes',
    ],
    time_limit_minutes: 240,
    difficulty_level: 'advanced',
    created_at: '2024-01-22T14:00:00Z',
    updated_at: '2024-01-22T14:00:00Z',
  },
  {
    id: 'challenge-database-1',
    lesson_id: 'make-your-own-lesson-3',
    title: 'Build Your Own Database',
    description: 'Create a simple key-value database with persistence, indexing, and basic query capabilities.',
    challenge_type: 'make_your_own',
    starter_code: `# Database Implementation Starter Code
import json
import os
from typing import Any, Dict, List, Optional

class SimpleDB:
    def __init__(self, db_path: str = "database.json"):
        self.db_path = db_path
        self.data: Dict[str, Any] = {}
        self.indexes: Dict[str, Dict[Any, List[str]]] = {}
        self.load_data()

    def load_data(self):
        """Load data from persistent storage"""
        # TODO: Implement data loading from file
        pass

    def save_data(self):
        """Save data to persistent storage"""
        # TODO: Implement data persistence
        pass

    def put(self, key: str, value: Any) -> bool:
        """Store a key-value pair"""
        # TODO: Implement data insertion
        pass

    def get(self, key: str) -> Optional[Any]:
        """Retrieve value by key"""
        # TODO: Implement data retrieval
        pass

    def delete(self, key: str) -> bool:
        """Delete a key-value pair"""
        # TODO: Implement data deletion
        pass

    def create_index(self, field_name: str):
        """Create an index on a field for faster queries"""
        # TODO: Implement indexing
        pass

    def query(self, conditions: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Query data with conditions"""
        # TODO: Implement querying with conditions
        pass

    def transaction(self, operations: List[Dict[str, Any]]) -> bool:
        """Execute multiple operations atomically"""
        # TODO: Implement transaction support
        pass

# Example usage
db = SimpleDB("mydb.json")
db.put("user:1", {"name": "Alice", "age": 30})
user = db.get("user:1")
print(user)`,
    test_cases: [
      {
        id: 'test-basic-operations',
        name: 'Basic CRUD Operations',
        description: 'Test put, get, delete operations',
        test_command: 'python -m pytest tests/test_basic_operations.py',
        points: 25,
        is_hidden: false,
      },
      {
        id: 'test-persistence',
        name: 'Data Persistence',
        description: 'Test data persistence across restarts',
        test_command: 'python -m pytest tests/test_persistence.py',
        points: 25,
        is_hidden: false,
      },
      {
        id: 'test-indexing',
        name: 'Indexing System',
        description: 'Test index creation and query performance',
        test_command: 'python -m pytest tests/test_indexing.py',
        points: 25,
        is_hidden: true,
      },
      {
        id: 'test-transactions',
        name: 'Transaction Support',
        description: 'Test atomic operations and rollback',
        test_command: 'python -m pytest tests/test_transactions.py',
        points: 25,
        is_hidden: true,
      },
    ],
    github_template_repo: 'https://github.com/learnhub-templates/database-challenge',
    submission_requirements: [
      'Implement basic CRUD operations (Create, Read, Update, Delete)',
      'Add data persistence to disk',
      'Implement indexing for faster queries',
      'Add transaction support with rollback',
      'Include comprehensive test suite',
      'Handle concurrent access safely',
    ],
    time_limit_minutes: 300,
    difficulty_level: 'advanced',
    created_at: '2024-01-25T09:00:00Z',
    updated_at: '2024-01-25T09:00:00Z',
  },
];

export const getMockChallengeByLessonId = (lessonId: string): CodeChallenge | undefined => {
  return mockCodeChallenges.find(challenge => challenge.lesson_id === lessonId);
};