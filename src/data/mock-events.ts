import type { Event, EventParticipant, EventLeaderboard, EventSubmission } from '@/types';

export const mockEvents: Event[] = [
  {
    id: 'event-1',
    title: 'Weekly Cybersecurity CTF Challenge',
    description: 'Test your cybersecurity skills in this week\'s capture-the-flag competition. Solve challenges ranging from web exploitation to cryptography.',
    thumbnail_url: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'cybersecurity',
    type: 'weekly_challenge',
    difficulty_level: 'intermediate',
    start_date: '2024-02-05T00:00:00Z',
    end_date: '2024-02-11T23:59:59Z',
    registration_deadline: '2024-02-04T23:59:59Z',
    prize_pool: 500,
    max_participants: 100,
    is_active: true,
    is_featured: true,
    tags: ['ctf', 'cybersecurity', 'web-exploitation', 'cryptography'],
    rules: [
      'No collaboration between participants',
      'All submissions must be original work',
      'Use of automated tools is prohibited',
      'Respect the competition infrastructure',
      'Report any technical issues immediately'
    ],
    requirements: [
      'Basic knowledge of cybersecurity concepts',
      'Familiarity with common security tools',
      'Access to a computer with internet connection',
      'Valid GitHub account for submissions'
    ],
    participant_count: 87,
    created_at: '2024-01-28T10:00:00Z',
    updated_at: '2024-02-01T15:30:00Z',
    organizer_id: 'organizer-1',
  },
  {
    id: 'event-2',
    title: 'Monthly Algorithm Championship',
    description: 'Compete in our monthly algorithm contest featuring complex data structures and optimization problems. Perfect for preparing for technical interviews.',
    thumbnail_url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'algorithms',
    type: 'monthly_competition',
    difficulty_level: 'advanced',
    start_date: '2024-02-01T00:00:00Z',
    end_date: '2024-02-29T23:59:59Z',
    registration_deadline: '2024-01-31T23:59:59Z',
    prize_pool: 2000,
    max_participants: 500,
    is_active: true,
    is_featured: true,
    tags: ['algorithms', 'data-structures', 'competitive-programming', 'optimization'],
    rules: [
      'Solutions must be submitted in supported languages (Python, Java, C++, JavaScript)',
      'Time limit: 2 hours per problem set',
      'No external libraries allowed except standard library',
      'Plagiarism will result in immediate disqualification',
      'Multiple submissions allowed, best score counts'
    ],
    requirements: [
      'Strong programming fundamentals',
      'Knowledge of common algorithms and data structures',
      'Experience with competitive programming platforms',
      'Ability to solve problems under time pressure'
    ],
    participant_count: 342,
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-01-30T12:00:00Z',
    organizer_id: 'organizer-2',
  },
  {
    id: 'event-3',
    title: 'Build Your Own Database Engine',
    description: 'A month-long challenge to build a functional database engine from scratch. Implement storage, indexing, and query processing.',
    thumbnail_url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'systems-programming',
    type: 'monthly_competition',
    difficulty_level: 'advanced',
    start_date: '2024-02-01T00:00:00Z',
    end_date: '2024-02-29T23:59:59Z',
    registration_deadline: '2024-01-30T23:59:59Z',
    prize_pool: 3000,
    max_participants: 50,
    is_active: true,
    is_featured: false,
    tags: ['systems-programming', 'database', 'storage-engine', 'indexing'],
    rules: [
      'Implementation must be from scratch (no existing database libraries)',
      'Code must be hosted on GitHub with clear documentation',
      'Weekly progress reports required',
      'Final submission includes demo video and performance benchmarks',
      'Open source license required for all submissions'
    ],
    requirements: [
      'Advanced programming skills in C/C++, Rust, or Go',
      'Understanding of database internals',
      'Knowledge of file systems and storage',
      'Experience with performance optimization',
      'Ability to write comprehensive documentation'
    ],
    participant_count: 23,
    created_at: '2024-01-10T14:00:00Z',
    updated_at: '2024-01-25T16:30:00Z',
    organizer_id: 'organizer-3',
  },
  {
    id: 'event-4',
    title: 'AI/ML Innovation Hackathon',
    description: '48-hour hackathon focused on innovative AI/ML applications. Build solutions for real-world problems using cutting-edge machine learning techniques.',
    thumbnail_url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ai-ml',
    type: 'hackathon',
    difficulty_level: 'intermediate',
    start_date: '2024-02-16T18:00:00Z',
    end_date: '2024-02-18T18:00:00Z',
    registration_deadline: '2024-02-14T23:59:59Z',
    prize_pool: 5000,
    max_participants: 200,
    is_active: true,
    is_featured: true,
    tags: ['ai', 'machine-learning', 'hackathon', 'innovation', 'deep-learning'],
    rules: [
      'Teams of 1-4 people allowed',
      'All code must be written during the event',
      'Use of pre-trained models and APIs is allowed',
      'Final presentation required (5 minutes)',
      'Projects must be deployed and accessible'
    ],
    requirements: [
      'Experience with Python and ML frameworks (TensorFlow, PyTorch)',
      'Understanding of machine learning concepts',
      'Ability to work in a fast-paced environment',
      'Basic knowledge of data preprocessing',
      'Presentation and communication skills'
    ],
    participant_count: 156,
    created_at: '2024-01-20T09:00:00Z',
    updated_at: '2024-02-02T11:15:00Z',
    organizer_id: 'organizer-4',
  },
  {
    id: 'event-5',
    title: 'Web3 & Blockchain Development Contest',
    description: 'Build decentralized applications and smart contracts in this comprehensive blockchain development competition.',
    thumbnail_url: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'blockchain',
    type: 'monthly_competition',
    difficulty_level: 'advanced',
    start_date: '2024-02-10T00:00:00Z',
    end_date: '2024-03-10T23:59:59Z',
    registration_deadline: '2024-02-08T23:59:59Z',
    prize_pool: 4000,
    max_participants: 75,
    is_active: true,
    is_featured: false,
    tags: ['blockchain', 'web3', 'smart-contracts', 'solidity', 'defi'],
    rules: [
      'Smart contracts must be deployed on testnet',
      'Code must be verified and open source',
      'Security audit report required',
      'Frontend interface mandatory',
      'Gas optimization will be evaluated'
    ],
    requirements: [
      'Proficiency in Solidity and Web3 development',
      'Understanding of blockchain fundamentals',
      'Experience with Ethereum development tools',
      'Knowledge of DeFi protocols',
      'Frontend development skills (React/Vue/Angular)'
    ],
    participant_count: 45,
    created_at: '2024-01-25T13:00:00Z',
    updated_at: '2024-02-01T10:45:00Z',
    organizer_id: 'organizer-5',
  },
  {
    id: 'event-6',
    title: 'Weekly Frontend Challenge',
    description: 'Weekly frontend development challenges focusing on modern web technologies, responsive design, and user experience.',
    thumbnail_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'web-development',
    type: 'weekly_challenge',
    difficulty_level: 'beginner',
    start_date: '2024-02-05T00:00:00Z',
    end_date: '2024-02-11T23:59:59Z',
    registration_deadline: '2024-02-04T18:00:00Z',
    prize_pool: 300,
    max_participants: 150,
    is_active: true,
    is_featured: false,
    tags: ['frontend', 'react', 'css', 'responsive-design', 'ux'],
    rules: [
      'Use modern frontend frameworks (React, Vue, Angular)',
      'Responsive design is mandatory',
      'Accessibility standards must be followed',
      'Code must be hosted on GitHub Pages or similar',
      'Design creativity will be evaluated'
    ],
    requirements: [
      'HTML, CSS, and JavaScript proficiency',
      'Experience with at least one frontend framework',
      'Understanding of responsive design principles',
      'Basic knowledge of accessibility guidelines',
      'Git and GitHub familiarity'
    ],
    participant_count: 98,
    created_at: '2024-01-29T11:00:00Z',
    updated_at: '2024-02-01T14:20:00Z',
    organizer_id: 'organizer-6',
  },
];

export const mockEventParticipants: EventParticipant[] = [
  // Event 1 participants (Weekly Cybersecurity CTF)
  {
    id: 'participant-1-1',
    event_id: 'event-1',
    user_id: 'user-1',
    registered_at: '2024-02-01T10:30:00Z',
    status: 'active',
    current_score: 850,
    current_rank: 1,
    last_submission_at: '2024-02-05T15:45:00Z',
    completion_time: 180,
  },
  {
    id: 'participant-1-2',
    event_id: 'event-1',
    user_id: 'user-2',
    registered_at: '2024-02-01T11:15:00Z',
    status: 'active',
    current_score: 820,
    current_rank: 2,
    last_submission_at: '2024-02-05T16:20:00Z',
    completion_time: 195,
  },
  {
    id: 'participant-1-3',
    event_id: 'event-1',
    user_id: 'user-3',
    registered_at: '2024-02-01T12:00:00Z',
    status: 'active',
    current_score: 780,
    current_rank: 3,
    last_submission_at: '2024-02-05T14:30:00Z',
    completion_time: 210,
  },
  {
    id: 'participant-1-4',
    event_id: 'event-1',
    user_id: 'user-4',
    registered_at: '2024-02-01T13:45:00Z',
    status: 'active',
    current_score: 750,
    current_rank: 4,
    last_submission_at: '2024-02-05T17:10:00Z',
    completion_time: 225,
  },
  {
    id: 'participant-1-5',
    event_id: 'event-1',
    user_id: 'user-5',
    registered_at: '2024-02-01T14:20:00Z',
    status: 'active',
    current_score: 720,
    current_rank: 5,
    last_submission_at: '2024-02-05T13:55:00Z',
    completion_time: 240,
  },
  // Event 2 participants (Monthly Algorithm Championship)
  {
    id: 'participant-2-1',
    event_id: 'event-2',
    user_id: 'user-6',
    registered_at: '2024-01-28T09:00:00Z',
    status: 'active',
    current_score: 1200,
    current_rank: 1,
    last_submission_at: '2024-02-05T20:30:00Z',
    completion_time: 95,
  },
  {
    id: 'participant-2-2',
    event_id: 'event-2',
    user_id: 'user-1',
    registered_at: '2024-01-28T10:30:00Z',
    status: 'active',
    current_score: 1150,
    current_rank: 2,
    last_submission_at: '2024-02-05T19:45:00Z',
    completion_time: 105,
  },
  {
    id: 'participant-2-3',
    event_id: 'event-2',
    user_id: 'user-7',
    registered_at: '2024-01-28T11:15:00Z',
    status: 'active',
    current_score: 1100,
    current_rank: 3,
    last_submission_at: '2024-02-05T21:00:00Z',
    completion_time: 110,
  },
  {
    id: 'participant-2-4',
    event_id: 'event-2',
    user_id: 'user-8',
    registered_at: '2024-01-28T12:00:00Z',
    status: 'active',
    current_score: 1050,
    current_rank: 4,
    last_submission_at: '2024-02-05T18:20:00Z',
    completion_time: 120,
  },
  {
    id: 'participant-2-5',
    event_id: 'event-2',
    user_id: 'user-9',
    registered_at: '2024-01-28T13:30:00Z',
    status: 'active',
    current_score: 1000,
    current_rank: 5,
    last_submission_at: '2024-02-05T22:15:00Z',
    completion_time: 125,
  },
];

export const mockEventLeaderboards: EventLeaderboard[] = [
  {
    event_id: 'event-1',
    participants: mockEventParticipants.filter(p => p.event_id === 'event-1'),
    last_updated: '2024-02-05T18:00:00Z',
  },
  {
    event_id: 'event-2',
    participants: mockEventParticipants.filter(p => p.event_id === 'event-2'),
    last_updated: '2024-02-05T22:30:00Z',
  },
];

export const mockEventSubmissions: EventSubmission[] = [
  {
    id: 'submission-1-1',
    event_id: 'event-1',
    participant_id: 'participant-1-1',
    challenge_id: 'ctf-web-1',
    submission_url: 'https://github.com/user1/ctf-solutions',
    score: 100,
    submitted_at: '2024-02-05T15:45:00Z',
    evaluated_at: '2024-02-05T16:00:00Z',
    feedback: 'Excellent solution with clean code and proper documentation.',
  },
  {
    id: 'submission-1-2',
    event_id: 'event-1',
    participant_id: 'participant-1-2',
    challenge_id: 'ctf-crypto-1',
    submission_url: 'https://github.com/user2/crypto-challenge',
    score: 95,
    submitted_at: '2024-02-05T16:20:00Z',
    evaluated_at: '2024-02-05T16:35:00Z',
    feedback: 'Good approach, minor optimization opportunities.',
  },
  {
    id: 'submission-2-1',
    event_id: 'event-2',
    participant_id: 'participant-2-1',
    submission_text: 'Algorithm implementation with O(n log n) complexity',
    score: 150,
    submitted_at: '2024-02-05T20:30:00Z',
    evaluated_at: '2024-02-05T20:45:00Z',
    feedback: 'Optimal solution with excellent time complexity.',
  },
];

// Helper functions
export const getEventById = (id: string): Event | undefined => {
  return mockEvents.find(event => event.id === id);
};

export const getActiveEvents = (): Event[] => {
  return mockEvents.filter(event => event.is_active);
};

export const getFeaturedEvents = (): Event[] => {
  return mockEvents.filter(event => event.is_featured && event.is_active);
};

export const getEventLeaderboard = (eventId: string): EventLeaderboard | undefined => {
  return mockEventLeaderboards.find(leaderboard => leaderboard.event_id === eventId);
};

export const getUserEventParticipation = (userId: string): EventParticipant[] => {
  return mockEventParticipants.filter(participant => participant.user_id === userId);
};

// Environment variable to control mock data usage
export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';