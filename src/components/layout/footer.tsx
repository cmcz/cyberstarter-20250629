import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">LearnHub</span>
            </div>
            <p className="text-sm">
              Empowering developers through hands-on learning experiences and real-world projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses?category=web-development" className="hover:text-white transition-colors duration-200">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses?category=cybersecurity" className="hover:text-white transition-colors duration-200">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/courses?category=ai-ml" className="hover:text-white transition-colors duration-200">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/courses?category=devops" className="hover:text-white transition-colors duration-200">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="hover:text-white transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-800 text-center text-sm">
          <p>&copy; 2024 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};