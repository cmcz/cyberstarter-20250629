import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Filter, Shield, Code, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useChallenges } from '@/hooks/use-challenges';
import type { ChallengeCategory, ChallengeType, DifficultyLevel } from '@/types';

export const ChallengesPage: React.FC = () => {
  const { data: challenges = [], isLoading, error } = useChallenges();
  const [selectedCategory, setSelectedCategory] = React.useState<ChallengeCategory | 'all'>('all');
  const [selectedType, setSelectedType] = React.useState<ChallengeType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<DifficultyLevel | 'all'>('all');

  const categories: Array<{ value: ChallengeCategory | 'all'; label: string }> = [
    { value: 'all', label: 'All Categories' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'systems-programming', label: 'Systems Programming' },
    { value: 'web-security', label: 'Web Security' },
    { value: 'cryptography', label: 'Cryptography' },
    { value: 'reverse-engineering', label: 'Reverse Engineering' },
    { value: 'network-security', label: 'Network Security' },
    { value: 'binary-exploitation', label: 'Binary Exploitation' },
  ];

  const types: Array<{ value: ChallengeType | 'all'; label: string; icon: React.ReactNode }> = [
    { value: 'all', label: 'All Types', icon: <Trophy className="h-4 w-4" /> },
    { value: 'ctf', label: 'CTF Challenges', icon: <Shield className="h-4 w-4" /> },
    { value: 'make_your_own', label: 'Make Your Own', icon: <Code className="h-4 w-4" /> },
    { value: 'algorithm', label: 'Algorithm', icon: <Trophy className="h-4 w-4" /> },
    { value: 'debugging', label: 'Debugging', icon: <Trophy className="h-4 w-4" /> },
  ];

  const difficulties: Array<{ value: DifficultyLevel | 'all'; label: string }> = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const filteredChallenges = challenges.filter((challenge) => {
    const categoryMatch = selectedCategory === 'all' || challenge.category === selectedCategory;
    const typeMatch = selectedType === 'all' || challenge.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || challenge.difficulty_level === selectedDifficulty;
    return categoryMatch && typeMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty: DifficultyLevel) => {
    switch (difficulty) {
      case 'beginner':
        return 'text-success-600 bg-success-100';
      case 'intermediate':
        return 'text-warning-600 bg-warning-100';
      case 'advanced':
        return 'text-error-600 bg-error-100';
      default:
        return 'text-secondary-600 bg-secondary-100';
    }
  };

  const getTypeIcon = (type: ChallengeType) => {
    switch (type) {
      case 'ctf':
        return <Shield className="h-4 w-4" />;
      case 'make_your_own':
        return <Code className="h-4 w-4" />;
      case 'algorithm':
        return <Trophy className="h-4 w-4" />;
      case 'debugging':
        return <Trophy className="h-4 w-4" />;
      default:
        return <Trophy className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: ChallengeType) => {
    switch (type) {
      case 'ctf':
        return 'text-accent-600 bg-accent-100';
      case 'make_your_own':
        return 'text-primary-600 bg-primary-100';
      case 'algorithm':
        return 'text-success-600 bg-success-100';
      case 'debugging':
        return 'text-warning-600 bg-warning-100';
      default:
        return 'text-secondary-600 bg-secondary-100';
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">
            Error Loading Challenges
          </h1>
          <p className="text-secondary-600 mb-6">
            {error.message}
          </p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">
          Coding Challenges
        </h1>
        <p className="text-lg text-secondary-600">
          Test your skills with hands-on challenges, CTF competitions, and build-your-own projects
        </p>
      </div>

      {/* Challenge Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-accent-600" />
            </div>
            <CardTitle>CTF Challenges</CardTitle>
            <CardDescription>
              Capture-the-flag competitions with real-world security scenarios
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary-600" />
            </div>
            <CardTitle>Make Your Own</CardTitle>
            <CardDescription>
              Build fundamental tools from scratch: shells, servers, databases
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-success-600" />
            </div>
            <CardTitle>Algorithm Challenges</CardTitle>
            <CardDescription>
              Solve complex problems and optimize your coding skills
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col lg:flex-row gap-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-secondary-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as ChallengeCategory | 'all')}
            className="rounded-lg border border-secondary-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as ChallengeType | 'all')}
          className="rounded-lg border border-secondary-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        >
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value as DifficultyLevel | 'all')}
          className="rounded-lg border border-secondary-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        >
          {difficulties.map((difficulty) => (
            <option key={difficulty.value} value={difficulty.value}>
              {difficulty.label}
            </option>
          ))}
        </select>
      </div>

      {/* Challenge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <Card key={challenge.id} className="group hover:shadow-lg transition-all duration-300">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={challenge.thumbnail_url || 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt={challenge.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getTypeColor(challenge.type)}`}>
                    {getTypeIcon(challenge.type)}
                    <span className="capitalize">{challenge.type.replace('_', ' ')}</span>
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty_level)}`}>
                    {challenge.difficulty_level}
                  </span>
                </div>
              </div>
              
              <CardTitle className="line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                {challenge.title}
              </CardTitle>
              
              <CardDescription className="line-clamp-2">
                {challenge.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-secondary-600 mb-4">
                {challenge.duration_hours && (
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{challenge.duration_hours}h</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{challenge.enrollment_count?.toLocaleString()}</span>
                </div>
                
                {challenge.rating && (
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-warning-400 text-warning-400" />
                    <span>{challenge.rating}</span>
                  </div>
                )}
              </div>

              <Button asChild className="w-full">
                <Link to={`/challenges/${challenge.id}`}>
                  Start Challenge
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredChallenges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-secondary-600">
            No challenges found matching your criteria.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedType('all');
              setSelectedDifficulty('all');
            }}
            className="mt-4"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};