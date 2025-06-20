import React from 'react';
import { User, Mail, Shield, Bell, CreditCard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/use-auth';

export const AccountPage: React.FC = () => {
  const { profile } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">
          Account Settings
        </h1>
        <p className="text-lg text-secondary-600">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-0">
              <nav className="space-y-1">
                <a
                  href="#profile"
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-primary-600 bg-primary-50 border-r-2 border-primary-600"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </a>
                <a
                  href="#security"
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-secondary-700 hover:bg-secondary-50 transition-colors duration-200"
                >
                  <Shield className="h-4 w-4" />
                  <span>Security</span>
                </a>
                <a
                  href="#notifications"
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-secondary-700 hover:bg-secondary-50 transition-colors duration-200"
                >
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </a>
                <a
                  href="#billing"
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-secondary-700 hover:bg-secondary-50 transition-colors duration-200"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Billing</span>
                </a>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <Card id="profile">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and profile settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                  <p className="text-sm text-secondary-600 mt-1">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  defaultValue={profile?.full_name || ''}
                  placeholder="Enter your full name"
                />
                <Input
                  label="Email"
                  type="email"
                  defaultValue={profile?.email || ''}
                  placeholder="Enter your email"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Role
                  </label>
                  <div className="px-3 py-2 bg-secondary-50 border border-secondary-300 rounded-lg text-secondary-600 capitalize">
                    {profile?.role || 'Student'}
                  </div>
                </div>
                <Input
                  label="Location"
                  placeholder="Enter your location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Bio
                </label>
                <textarea
                  className="block w-full rounded-lg border border-secondary-300 px-3 py-2 text-secondary-900 placeholder-secondary-400 shadow-sm transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  rows={4}
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card id="security">
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your password and security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-secondary-900 mb-2">
                  Change Password
                </h4>
                <div className="space-y-3">
                  <Input
                    label="Current Password"
                    type="password"
                    placeholder="Enter current password"
                  />
                  <Input
                    label="New Password"
                    type="password"
                    placeholder="Enter new password"
                  />
                  <Input
                    label="Confirm New Password"
                    type="password"
                    placeholder="Confirm new password"
                  />
                </div>
                <Button className="mt-4">Update Password</Button>
              </div>

              <hr className="border-secondary-200" />

              <div>
                <h4 className="font-medium text-secondary-900 mb-2">
                  Two-Factor Authentication
                </h4>
                <p className="text-sm text-secondary-600 mb-4">
                  Add an extra layer of security to your account
                </p>
                <Button variant="outline">Enable 2FA</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications Section */}
          <Card id="notifications">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-secondary-900">
                      Course Updates
                    </h4>
                    <p className="text-sm text-secondary-600">
                      Get notified about new lessons and course updates
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-secondary-900">
                      Weekly Challenges
                    </h4>
                    <p className="text-sm text-secondary-600">
                      Receive notifications about new weekly challenges
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-secondary-900">
                      Marketing Emails
                    </h4>
                    <p className="text-sm text-secondary-600">
                      Receive emails about new courses and promotions
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};