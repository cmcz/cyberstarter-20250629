import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, Clock, DollarSign, Filter, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEvents } from '@/hooks/use-events';
import type { EventCategory, EventType, DifficultyLevel } from '@/types';

export const EventsPage: React.FC = () => {
  const { data: events = [], isLoading, error } = useEvents();
  const [selectedCategory, setSelectedCategory] = React.useState<EventCategory | 'all'>('all');
  const [selectedType, setSelectedType] = React.useState<EventType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<DifficultyLevel | 'all'>('all');

  const categories: Array<{ value: EventCategory | 'all'; label: string }> = [
    { value: 'all', label: 'All Categories' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'algorithms', label: 'Algorithms' },
    { value: 'systems-programming', label: 'Systems Programming' },
    { value: 'ai-ml', label: 'AI & ML' },
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'devops', label: 'DevOps' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'game-development', label: 'Game Development' },
    { value: 'mixed', label: 'Mixed' },
  ];

  const types: Array<{ value: EventType | 'all'; label: string }> = [
    { value: 'all', label: 'All Types' },
    { value: 'weekly_challenge', label: 'Weekly Challenge' },
    { value: 'monthly_competition', label: 'Monthly Competition' },
    { value: 'hackathon', label: 'Hackathon' },
    { value: 'ctf_tournament', label: 'CTF Tournament' },
    { value: 'coding_contest', label: 'Coding Contest' },
  ];

  const difficulties: Array<{ value: DifficultyLevel | 'all'; label: string }> = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const filteredEvents = events.filter((event) => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const typeMatch = selectedType === 'all' || event.type === selectedType;
    const difficultyMatch = selectedDifficulty === 'all' || event.difficulty_level === selectedDifficulty;
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

  const getTypeColor = (type: EventType) => {
    switch (type) {
      case 'weekly_challenge':
        return 'text-primary-600 bg-primary-100';
      case 'monthly_competition':
        return 'text-accent-600 bg-accent-100';
      case 'hackathon':
        return 'text-success-600 bg-success-100';
      case 'ctf_tournament':
        return 'text-error-600 bg-error-100';
      case 'coding_contest':
        return 'text-warning-600 bg-warning-100';
      default:
        return 'text-secondary-600 bg-secondary-100';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatPrize = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  const getEventStatus = (event: any) => {
    const now = new Date();
    const startDate = new Date(event.start_date);
    const endDate = new Date(event.end_date);
    const registrationDeadline = event.registration_deadline ? new Date(event.registration_deadline) : null;

    if (now < startDate) {
      if (registrationDeadline && now > registrationDeadline) {
        return { status: 'registration_closed', label: 'Registration Closed', color: 'text-error-600 bg-error-100' };
      }
      return { status: 'upcoming', label: 'Upcoming', color: 'text-primary-600 bg-primary-100' };
    } else if (now >= startDate && now <= endDate) {
      return { status: 'active', label: 'Active', color: 'text-success-600 bg-success-100' };
    } else {
      return { status: 'ended', label: 'Ended', color: 'text-secondary-600 bg-secondary-100' };
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
            Error Loading Events
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
          Events & Competitions
        </h1>
        <p className="text-lg text-secondary-600">
          Join weekly challenges, monthly competitions, and hackathons to test your skills and win prizes
        </p>
      </div>

      {/* Event Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary-600" />
            </div>
            <CardTitle className="text-lg">Weekly Challenges</CardTitle>
            <CardDescription>
              Regular skill-building challenges with quick turnaround
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-accent-600" />
            </div>
            <CardTitle className="text-lg">Competitions</CardTitle>
            <CardDescription>
              Monthly competitions with substantial prize pools
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-success-600" />
            </div>
            <CardTitle className="text-lg">Hackathons</CardTitle>
            <CardDescription>
              Intensive 24-48 hour innovation challenges
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-error-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-error-600" />
            </div>
            <CardTitle className="text-lg">CTF Tournaments</CardTitle>
            <CardDescription>
              Cybersecurity capture-the-flag competitions
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
            onChange={(e) => setSelectedCategory(e.target.value as EventCategory | 'all')}
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
          onChange={(e) => setSelectedType(e.target.value as EventType | 'all')}
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

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => {
          const eventStatus = getEventStatus(event);
          
          return (
            <Card key={event.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={event.thumbnail_url || 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                      {event.type.replace('_', ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty_level)}`}>
                      {event.difficulty_level}
                    </span>
                  </div>
                  {event.is_featured && (
                    <Star className="h-4 w-4 text-warning-500 fill-warning-500" />
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${eventStatus.color}`}>
                    {eventStatus.label}
                  </span>
                  {event.prize_pool && (
                    <div className="flex items-center space-x-1 text-success-600">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm font-medium">{formatPrize(event.prize_pool)}</span>
                    </div>
                  )}
                </div>
                
                <CardTitle className="line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                  {event.title}
                </CardTitle>
                
                <CardDescription className="line-clamp-2">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm text-secondary-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(event.start_date)} - {formatDate(event.end_date)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-secondary-600">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{event.participant_count} participants</span>
                    </div>
                    {event.max_participants && (
                      <span className="text-xs">
                        Max: {event.max_participants}
                      </span>
                    )}
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link to={`/events/${event.id}`}>
                    View Event
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-secondary-600">
            No events found matching your criteria.
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