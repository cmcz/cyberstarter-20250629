import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCourses } from '@/hooks/use-courses';
import type { CourseCategory, DifficultyLevel } from '@/types';

export const CoursesPage: React.FC = () => {
  const { data: courses = [], isLoading, error } = useCourses();
  const [selectedCategory, setSelectedCategory] = React.useState<CourseCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<DifficultyLevel | 'all'>('all');

  const categories: Array<{ value: CourseCategory | 'all'; label: string }> = [
    { value: 'all', label: 'All Categories' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'ai-ml', label: 'AI & ML' },
    { value: 'devops', label: 'DevOps' },
    { value: 'blockchain', label: 'Blockchain' },
  ];

  const difficulties: Array<{ value: DifficultyLevel | 'all'; label: string }> = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const filteredCourses = courses.filter((course) => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || course.difficulty_level === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const formatPrice = (price: number) => {
    return price === 0 ? 'Free' : `$${price.toFixed(2)}`;
  };

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
            Error Loading Courses
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
          Explore Courses
        </h1>
        <p className="text-lg text-secondary-600">
          Discover our comprehensive collection of courses designed to advance your skills
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-secondary-500" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as CourseCategory | 'all')}
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

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="group hover:shadow-lg transition-all duration-300">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={course.thumbnail_url || 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty_level)}`}>
                  {course.difficulty_level}
                </span>
                <span className="text-lg font-bold text-primary-600">
                  {formatPrice(course.price)}
                </span>
              </div>
              
              <CardTitle className="line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                {course.title}
              </CardTitle>
              
              <CardDescription className="line-clamp-2">
                {course.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-secondary-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration_hours}h</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.enrollment_count?.toLocaleString()}</span>
                </div>
                
                {course.rating && (
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-warning-400 text-warning-400" />
                    <span>{course.rating}</span>
                  </div>
                )}
              </div>

              <Button asChild className="w-full">
                <Link to={`/courses/${course.id}`}>
                  View Course
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-secondary-600">
            No courses found matching your criteria.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedCategory('all');
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