import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Trophy, Clock, TrendingUp, Play, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

export const DashboardPage: React.FC = () => {
  const { profile } = useAuth();

  // Mock data for dashboard
  const stats = {
    coursesEnrolled: 5,
    coursesCompleted: 2,
    hoursLearned: 47,
    currentStreak: 12,
  };

  const recentCourses = [
    {
      id: '1',
      title: 'Complete React Development Bootcamp',
      progress: 65,
      lastAccessed: '2 hours ago',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '2',
      title: 'Cybersecurity CTF Challenges',
      progress: 30,
      lastAccessed: '1 day ago',
      thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: '3',
      title: 'Machine Learning Fundamentals',
      progress: 100,
      lastAccessed: '3 days ago',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const upcomingDeadlines = [
    {
      title: 'React Project Submission',
      course: 'Complete React Development Bootcamp',
      dueDate: '2024-02-15',
      type: 'assignment',
    },
    {
      title: 'Weekly CTF Challenge',
      course: 'Cybersecurity CTF Challenges',
      dueDate: '2024-02-10',
      type: 'challenge',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">
          Welcome back, {profile?.full_name || 'Learner'}!
        </h1>
        <p className="text-lg text-secondary-600">
          Continue your learning journey and track your progress
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
            <BookOpen className="h-4 w-4 text-primary-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.coursesEnrolled}</div>
            <p className="text-xs text-secondary-600">
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-success-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.coursesCompleted}</div>
            <p className="text-xs text-secondary-600">
              +1 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Learned</CardTitle>
            <Clock className="h-4 w-4 text-warning-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.hoursLearned}</div>
            <p className="text-xs text-secondary-600">
              +12 from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.currentStreak} days</div>
            <p className="text-xs text-secondary-600">
              Keep it up!
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>
                Pick up where you left off
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 border border-secondary-200 rounded-lg hover:bg-secondary-50 transition-colors duration-200">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-secondary-900 truncate">
                      {course.title}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      Last accessed {course.lastAccessed}
                    </p>
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-secondary-600">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <div className="mt-1 w-full bg-secondary-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link to={`/courses/${course.id}`}>
                      <Play className="h-4 w-4 mr-1" />
                      Continue
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>
                Don't miss these important dates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="p-4 border border-secondary-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-secondary-900">
                        {deadline.title}
                      </h4>
                      <p className="text-sm text-secondary-600 mt-1">
                        {deadline.course}
                      </p>
                      <div className="flex items-center mt-2">
                        <Trophy className="h-4 w-4 text-warning-500 mr-1" />
                        <span className="text-sm text-warning-600 capitalize">
                          {deadline.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-secondary-900">
                        {new Date(deadline.dueDate).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-secondary-600">
                        Due date
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/courses">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/challenges">
                  <Trophy className="h-4 w-4 mr-2" />
                  Try Challenges
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/account">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Progress
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};