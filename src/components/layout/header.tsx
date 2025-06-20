import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { useUIStore } from '@/store/ui-store';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, profile, signOut } = useAuth();
  const { sidebarOpen, setSidebarOpen } = useUIStore();
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  const handleSignOut = () => {
    signOut();
    setUserMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-secondary-900">LearnHub</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/courses" 
              className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
            >
              Courses
            </Link>
            <Link 
              to="/challenges" 
              className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
            >
              Challenges
            </Link>
            <Link 
              to="/events" 
              className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
            >
              Events
            </Link>
          </nav>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 rounded-lg p-2 text-secondary-700 hover:bg-secondary-100 transition-colors duration-200"
              >
                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary-600" />
                </div>
                <span className="hidden sm:block text-sm font-medium">
                  {profile?.full_name || 'User'}
                </span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-secondary-200 bg-white shadow-lg animate-scale-in">
                  <div className="p-2">
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/account"
                      className="flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 transition-colors duration-200"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                    <hr className="my-2 border-secondary-200" />
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-sm text-error-600 hover:bg-error-50 transition-colors duration-200"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/login')}
              >
                Sign In
              </Button>
              <Button
                size="sm"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg text-secondary-700 hover:bg-secondary-100 transition-colors duration-200"
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {sidebarOpen && (
        <div className="md:hidden border-t border-secondary-200 bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link
              to="/courses"
              className="block px-3 py-2 rounded-lg text-secondary-700 hover:bg-secondary-100 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/challenges"
              className="block px-3 py-2 rounded-lg text-secondary-700 hover:bg-secondary-100 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              Challenges
            </Link>
            <Link
              to="/events"
              className="block px-3 py-2 rounded-lg text-secondary-700 hover:bg-secondary-100 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              Events
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};