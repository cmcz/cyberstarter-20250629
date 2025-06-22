import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';
import { Layout } from '@/components/layout/layout';
import { ProtectedRoute } from '@/components/auth/protected-route';

// Pages
import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { SignupPage } from '@/pages/signup';
import { CoursesPage } from '@/pages/courses';
import { CourseDetailPage } from '@/pages/course-detail';
import { LessonViewerPage } from '@/pages/lesson-viewer';
import { DashboardPage } from '@/pages/dashboard';
import { AccountPage } from '@/pages/account';

// Import Inter font
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonViewerPage />} />
            
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <AccountPage />
                </ProtectedRoute>
              }
            />
            
            {/* Catch all route */}
            <Route
              path="*"
              element={
                <div className="container mx-auto px-4 py-8 text-center">
                  <h1 className="text-2xl font-bold text-secondary-900 mb-4">
                    Page Not Found
                  </h1>
                  <p className="text-secondary-600">
                    The page you're looking for doesn't exist.
                  </p>
                </div>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;