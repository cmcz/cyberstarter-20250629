import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, Play, CheckCircle, Lock, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCourse } from '@/hooks/use-courses';
import { useEnrollment, useEnrollInCourse } from '@/hooks/use-enrollments';
import { getModulesByCourseId, getLessonsByModuleId } from '@/data/mock-course-content';
import { useAuth } from '@/hooks/use-auth';

export const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const { data: course, isLoading, error } = useCourse(id!);
  const { data: enrollment } = useEnrollment(id!);
  const enrollInCourseMutation = useEnrollInCourse();

  // For mock data, use the mock modules and lessons
  const modules = course?.modules || getModulesByCourseId(id!);
  const lessons = modules.flatMap(module => getLessonsByModuleId(module.id));

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-secondary-600 mb-6">
            {error?.message || "The course you're looking for doesn't exist."}
          </p>
          <Button asChild>
            <Link to="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return price === 0 ? 'Free' : `$${price.toFixed(2)}`;
  };

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

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'quiz':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Play className="h-4 w-4" />;
    }
  };

  const isEnrolled = !!enrollment;

  const handleEnroll = () => {
    if (id) {
      enrollInCourseMutation.mutate(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/courses">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Course Header */}
          <div className="mb-8">
            <div className="aspect-video overflow-hidden rounded-lg mb-6">
              <img
                src={course.thumbnail_url || 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(course.difficulty_level)}`}>
                {course.difficulty_level}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 capitalize">
                {course.type}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary-100 text-secondary-700 capitalize">
                {course.category.replace('-', ' ')}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-secondary-900 mb-4">
              {course.title}
            </h1>

            <p className="text-lg text-secondary-600 mb-6">
              {course.description}
            </p>

            <div className="flex items-center space-x-6 text-sm text-secondary-600">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration_hours} hours</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.enrollment_count?.toLocaleString()} students</span>
              </div>
              {course.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-warning-400 text-warning-400" />
                  <span>{course.rating} rating</span>
                </div>
              )}
            </div>
          </div>

          {/* Course Content */}
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>
                {modules.length} modules • {lessons.length} lessons
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
                                    to={`/courses/${course.id}/lessons/${lesson.id}`}
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
                              <span className="capitalize">{lesson.content_type}</span>
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
                  {formatPrice(course.price)}
                </div>
                {course.price > 0 && (
                  <p className="text-sm text-secondary-600">
                    One-time payment
                  </p>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {isAuthenticated ? (
                isEnrolled ? (
                  <Button className="w-full" asChild>
                    <Link to={`/courses/${course.id}/learn`}>
                      Continue Learning
                    </Link>
                  </Button>
                ) : (
                  <Button 
                    className="w-full" 
                    onClick={handleEnroll}
                    loading={enrollInCourseMutation.isPending}
                  >
                    Enroll Now
                  </Button>
                )
              ) : (
                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <Link to="/signup">Sign Up to Enroll</Link>
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
                  This course includes:
                </h4>
                <ul className="space-y-2 text-sm text-secondary-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                    <span>{course.duration_hours} hours of content</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                    <span>Lifetime access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-600" />
                    <span>Q&A support</span>
                  </li>
                  {course.type === 'coding' && (
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success-600" />
                      <span>GitHub integration</span>
                    </li>
                  )}
                </ul>
              </div>

              {course.tags && course.tags.length > 0 && (
                <div className="pt-4 border-t border-secondary-200">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Tags:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
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