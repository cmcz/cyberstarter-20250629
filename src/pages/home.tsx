import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Trophy, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useFeaturedEvents } from '@/hooks/use-events';

export const HomePage: React.FC = () => {
  const { data: featuredEvents = [] } = useFeaturedEvents();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            Master Skills Through
            <span className="text-primary-600"> Hands-On Learning</span>
          </h1>
          <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Join thousands of developers learning through interactive courses, CTF challenges, 
            and real-world coding projects. Build your portfolio while you learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/courses">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/challenges">
                Try Challenges
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Why Choose LearnHub?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We offer multiple learning paths to match your style and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary-600" />
              </div>
              <CardTitle>Interactive Coding</CardTitle>
              <CardDescription>
                Build real projects with integrated testing and GitHub integration
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent-600" />
              </div>
              <CardTitle>CTF Challenges</CardTitle>
              <CardDescription>
                Hands-on cybersecurity training through capture-the-flag scenarios
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-success-600" />
              </div>
              <CardTitle>Weekly Challenges</CardTitle>
              <CardDescription>
                Compete in weekly exercises with prizes and job opportunities
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Featured Events Section */}
      {featuredEvents.length > 0 && (
        <section className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Featured Events
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Join our upcoming competitions and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={event.thumbnail_url || 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                      {event.type.replace('_', ' ')}
                    </span>
                    {event.prize_pool && (
                      <span className="text-success-600 font-semibold text-sm">
                        ${event.prize_pool.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-secondary-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.start_date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{event.participant_count}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="sm">
                    <Link to={`/events/${event.id}`}>
                      View Event
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="bg-secondary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-secondary-600">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-secondary-600">Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-secondary-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-secondary-600">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and start building your skills today
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/signup">
              Get Started Free
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};