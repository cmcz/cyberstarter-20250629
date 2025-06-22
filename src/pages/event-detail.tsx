import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Trophy, 
  Clock, 
  DollarSign, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle,
  Star,
  Target,
  Award
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEvent, useEventParticipation, useEventLeaderboard, useJoinEvent } from '@/hooks/use-events';
import { useAuth } from '@/hooks/use-auth';

export const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const { data: event, isLoading, error } = useEvent(id!);
  const { data: participation } = useEventParticipation(id!);
  const { data: leaderboard } = useEventLeaderboard(id!);
  const joinEventMutation = useJoinEvent();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">
            Event Not Found
          </h1>
          <p className="text-secondary-600 mb-6">
            {error?.message || "The event you're looking for doesn't exist."}
          </p>
          <Button asChild>
            <Link to="/events">Browse Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
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

  const getTypeColor = (type: string) => {
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
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatPrize = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  const getEventStatus = () => {
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

  const eventStatus = getEventStatus();
  const isParticipating = !!participation;
  const canRegister = eventStatus.status === 'upcoming' && !isParticipating;

  const handleJoinEvent = () => {
    if (id) {
      joinEventMutation.mutate(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/events">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Event Header */}
          <div className="mb-8">
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
              <img
                src={event.thumbnail_url || 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                {event.type.replace('_', ' ')}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(event.difficulty_level)}`}>
                {event.difficulty_level}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${eventStatus.color}`}>
                {eventStatus.label}
              </span>
              {event.is_featured && (
                <div className="flex items-center space-x-1 text-warning-600">
                  <Star className="h-4 w-4 fill-warning-600" />
                  <span className="text-sm font-medium">Featured</span>
                </div>
              )}
            </div>

            <h1 className="text-3xl font-bold text-secondary-900 mb-4">
              {event.title}
            </h1>

            <p className="text-lg text-secondary-600 mb-6">
              {event.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-secondary-600">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <div>
                  <div className="font-medium">Start Date</div>
                  <div>{formatDate(event.start_date)}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <div className="font-medium">End Date</div>
                  <div>{formatDate(event.end_date)}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <div>
                  <div className="font-medium">Participants</div>
                  <div>{event.participant_count}{event.max_participants && ` / ${event.max_participants}`}</div>
                </div>
              </div>
              {event.prize_pool && (
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4" />
                  <div>
                    <div className="font-medium">Prize Pool</div>
                    <div className="text-success-600 font-semibold">{formatPrize(event.prize_pool)}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            {/* Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Rules & Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-secondary-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            {leaderboard && leaderboard.participants.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5" />
                    <span>Leaderboard</span>
                  </CardTitle>
                  <CardDescription>
                    Current standings • Last updated: {new Date(leaderboard.last_updated).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {leaderboard.participants.slice(0, 10).map((participant, index) => (
                      <div key={participant.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary-50">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            index === 0 ? 'bg-warning-100 text-warning-700' :
                            index === 1 ? 'bg-secondary-200 text-secondary-700' :
                            index === 2 ? 'bg-warning-50 text-warning-600' :
                            'bg-secondary-100 text-secondary-600'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-secondary-900">
                              User {participant.user_id.slice(-4)}
                            </div>
                            <div className="text-sm text-secondary-600">
                              {participant.completion_time && `${participant.completion_time} min`}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary-600">
                            {participant.current_score} pts
                          </div>
                          <div className="text-sm text-secondary-600">
                            Rank #{participant.current_rank}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <div className="text-center">
                {event.prize_pool && (
                  <div className="text-3xl font-bold text-success-600 mb-2">
                    {formatPrize(event.prize_pool)}
                  </div>
                )}
                <p className="text-sm text-secondary-600">
                  {event.prize_pool ? 'Total Prize Pool' : 'Free to Join'}
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {isAuthenticated ? (
                isParticipating ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-success-600 bg-success-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">You're registered!</span>
                    </div>
                    {participation && (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Your Score:</span>
                          <span className="font-medium">{participation.current_score} pts</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Your Rank:</span>
                          <span className="font-medium">#{participation.current_rank}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Status:</span>
                          <span className="font-medium capitalize">{participation.status}</span>
                        </div>
                      </div>
                    )}
                    <Button className="w-full" asChild>
                      <Link to={`/events/${event.id}/compete`}>
                        Continue Competing
                      </Link>
                    </Button>
                  </div>
                ) : canRegister ? (
                  <Button 
                    className="w-full" 
                    onClick={handleJoinEvent}
                    loading={joinEventMutation.isPending}
                  >
                    Register for Event
                  </Button>
                ) : (
                  <div className="text-center">
                    <div className={`px-3 py-2 rounded-lg text-sm font-medium ${eventStatus.color} mb-3`}>
                      {eventStatus.label}
                    </div>
                    {eventStatus.status === 'registration_closed' && (
                      <p className="text-sm text-secondary-600">
                        Registration has closed for this event.
                      </p>
                    )}
                    {eventStatus.status === 'ended' && (
                      <p className="text-sm text-secondary-600">
                        This event has ended. Check out our other events!
                      </p>
                    )}
                  </div>
                )
              ) : (
                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <Link to="/signup">Sign Up to Join</Link>
                  </Button>
                  <p className="text-center text-sm text-secondary-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary-600 hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-secondary-200">
                <h4 className="font-semibold text-secondary-900 mb-3">
                  Event Information:
                </h4>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary-600" />
                    <span>Duration: {Math.ceil((new Date(event.end_date).getTime() - new Date(event.start_date).getTime()) / (1000 * 60 * 60 * 24))} days</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary-600" />
                    <span>{event.participant_count} participants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-primary-600" />
                    <span>Difficulty: {event.difficulty_level}</span>
                  </li>
                  {event.registration_deadline && (
                    <li className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-warning-600" />
                      <span>Registration deadline: {new Date(event.registration_deadline).toLocaleDateString()}</span>
                    </li>
                  )}
                </ul>
              </div>

              {event.tags && event.tags.length > 0 && (
                <div className="pt-4 border-t border-secondary-200">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Tags:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};