import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, Play, CheckCircle, Lock, ArrowLeft, Shield, Code, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useChallenge } from '@/hooks/use-challenges';
import { useChallengeEnrollment, useEnrollInChallenge } from '@/hooks/use-challenges';
import { getChallengeModulesByChallengeId, getChallengeLessonsByModuleId } from '@/data/mock-challenges';
import { useAuth } from '@/hooks/use-auth';

export const ChallengeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const { data: challenge, isLoading, error } = useChallenge(id!);
  const { data: enrollment } = useChallengeEnrollment(id!);
  const enrollInChallengeMutation = useEnrollInChallenge();

  // For mock data, use the mock modules and lessons
  const modules = challenge?.modules || getChallengeModulesByChallengeId(id!);
  const lessons = modules.flatMap(module => getChallengeLessonsByModuleId(module.id));

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (error || !challenge) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">
            Challenge Not Found
          </h1>
          <p className="text-secondary-600 mb-6">
            {error?.message || "The challenge you're looking for doesn't exist."}
          </p>
          <Button asChild>
            <Link to="/challenges">Browse Challenges</Link>
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'ctf':
        return <Shield className="h-4 w-4" />;
      case 'make_your_own':
        return <Code className="h-4 w-4" />;
      default:
        return <Trophy className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ctf':
        return 'text-accent-600 bg-accent-100';
      case 'make_your_own':
        return 'text-primary-600 bg-primary-100';
      default:
        return 'text-success-600 bg-success-100';
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'quiz':
        return <CheckCircle className="h-4 w-4" />;
      case 'code_challenge':
        return <Code className="h-4 w-4" />;
      default:
        return <Play className="h-4 w-4" />;
    }
  };

  const isEnrolled = !!enrollment;

  const handleEnroll = () => {
    if (id) {
      enrollInChallengeMutation.mutate(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/challenges">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Challenges
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Challenge Header */}
          <div className="mb-8">
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
              <img
                src={challenge.thumbnail_url || 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt={challenge.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getTypeColor(challenge.type)}`}>
                {getTypeIcon(challenge.type)}
                <span className="capitalize">{challenge.type.replace('_', ' ')}</span>
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty_level)}`}>
                {challenge.difficulty_level}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary-100 text-secondary-700 capitalize">
                {challenge.category.replace('-', ' ')}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-secondary-900 mb-4">
              {challenge.title}
            </h1>

            <p className="text-lg text-secondary-600 mb-6">
              {challenge.description}
            </p>

            <div className="flex items-center space-x-6 text-sm text-secondary-600">
              {challenge.duration_hours && (
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{challenge.duration_hours} hours</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{challenge.enrollment_count?.toLocaleString()} participants</span>
              </div>
              {challenge.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-warning-400 text-warning-400" />
                  <span>{challenge.rating} rating</span>
                </div>
              )}
            </div>
          </div>

          {/* Challenge Content */}
          <Card>
            <CardHeader>
              <CardTitle>Challenge Content</CardTitle>
              <CardDescription>
                {modules.length} modules • {lessons.length} challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modules.map((module, moduleIndex) => {
                  const moduleLessons = lessons.filter(l => l.module_id === module.id);
                  
                  return (
                    <div key={module.id} className="border border-secondary-200 rounded-lg">
                      <div className="p-4 bg-secondary-50 border-b border-secondary-200">
                        <h3 className="font-semibold text-secondary-900">
                          Module {moduleIndex + 1}: {module.title}
                        </h3>
                        <p className="text-sm text-secondary-600 mt-1">
                          {module.description}
                        </p>
                      </div>
                      
                      <div className="divide-y divide-secondary-200">
                        {moduleLessons.map((lesson) => (
                          <div key={lesson.id} className="p-4 flex items-center justify-between hover:bg-secondary-50 transition-colors duration-200">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-100">
                                {isEnrolled ? (
                                  getContentTypeIcon(lesson.content_type)
                                ) : (
                                  <Lock className="h-4 w-4 text-secondary-500" />
                                )}
                              </div>
                              <div>
                                {isEnrolled ? (
                                  <Link
                                    to={`/challenges/${challenge.id}/lessons/${lesson.id}`}
                                    className="font-medium text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                                  >
                                    {lesson.title}
                                  </Link>
                                ) : (
                                  <h4 className="font-medium text-secondary-900">
                                    {lesson.title}
                                  </h4>
                                )}
                                <p className="text-sm text-secondary-600">
                                  {lesson.description}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2 text-sm text-secondary-600">
                              {lesson.duration_minutes && (
                                <span>{lesson.duration_minutes} min</span>
                              )}
                              <span className="capitalize">{lesson.content_type.replace('_', ' ')}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  Free
                </div>
                <p className="text-sm text-secondary-600">
                  Open to all participants
                </p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {isAuthenticated ? (
                isEnrolled ? (
                  <Button className="w-full" asChild>
                    <Link to={`/challenges/${challenge.id}/learn`}>
                      Continue Challenge
                    </Link>
                  </Button>
                ) : (
                  <Button 
                    className="w-full" 
                    onClick={handleEnroll}
                    loading={enrollInChallengeMutation.isPending}
                  >
                    Start Challenge
                  </Button>
                )
              ) : (
                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <Link to="/signup">Sign Up to Start</Link>
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
                  This challenge includes:
                </h4>
                <ul className="space-y-2 text-sm text-secondary-600">
                  {challenge.duration_hours && (
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600" />
                      <span>{challenge.duration_hours} hours of content</span>
                    </li>
                  )}
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                    <span>Hands-on challenges</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                    <span>Automated testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                    <span>Community support</span>
                  </li>
                  {challenge.type === 'make_your_own' && (
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600" />
                      <span>GitHub integration</span>
                    </li>
                  )}
                  {challenge.type === 'ctf' && (
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600" />
                      <span>Real-world scenarios</span>
                    </li>
                  )}
                </ul>
              </div>

              {challenge.tags && challenge.tags.length > 0 && (
                <div className="pt-4 border-t border-secondary-200">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Tags:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.tags.map((tag) => (
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