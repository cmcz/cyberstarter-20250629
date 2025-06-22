import React from 'react';
import { Github, Clock, Trophy, TestTube, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MarkdownRenderer } from '@/components/ui/markdown-renderer';
import type { CodeChallenge, CodeSubmission, TestResult } from '@/types';

interface CodeChallengeViewerProps {
  challenge: CodeChallenge;
  submission?: CodeSubmission;
  onSubmit: (repoUrl: string) => void;
  isSubmitting?: boolean;
}

export const CodeChallengeViewer: React.FC<CodeChallengeViewerProps> = ({
  challenge,
  submission,
  onSubmit,
  isSubmitting = false,
}) => {
  const [repoUrl, setRepoUrl] = React.useState('');
  const [showAllTests, setShowAllTests] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repoUrl.trim()) {
      onSubmit(repoUrl.trim());
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="h-5 w-5 text-success-600" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-error-600" />;
      case 'testing':
        return <TestTube className="h-5 w-5 text-warning-600 animate-pulse" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-secondary-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-secondary-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed':
        return 'text-success-600 bg-success-50 border-success-200';
      case 'failed':
        return 'text-error-600 bg-error-50 border-error-200';
      case 'testing':
        return 'text-warning-600 bg-warning-50 border-warning-200';
      case 'pending':
        return 'text-secondary-600 bg-secondary-50 border-secondary-200';
      default:
        return 'text-secondary-600 bg-secondary-50 border-secondary-200';
    }
  };

  const visibleTests = showAllTests 
    ? challenge.test_cases 
    : challenge.test_cases.filter(test => !test.is_hidden);

  const totalPoints = challenge.test_cases.reduce((sum, test) => sum + test.points, 0);
  const earnedPoints = submission?.test_results?.reduce((sum, result) => 
    sum + (result.passed ? result.points_earned : 0), 0) || 0;

  return (
    <div className="space-y-6">
      {/* Challenge Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl mb-2">{challenge.title}</CardTitle>
              <CardDescription className="text-base">
                {challenge.description}
              </CardDescription>
            </div>
            <div className="flex items-center space-x-4 text-sm text-secondary-600">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{challenge.time_limit_minutes} min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trophy className="h-4 w-4" />
                <span>{totalPoints} points</span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Challenge Content */}
      <Card>
        <CardHeader>
          <CardTitle>Challenge Description</CardTitle>
        </CardHeader>
        <CardContent>
          <MarkdownRenderer content={challenge.description} />
        </CardContent>
      </Card>

      {/* Starter Code */}
      {challenge.starter_code && (
        <Card>
          <CardHeader>
            <CardTitle>Starter Code</CardTitle>
            <CardDescription>
              Use this as a starting point for your implementation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-secondary-900 text-secondary-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{challenge.starter_code}</code>
            </pre>
          </CardContent>
        </Card>
      )}

      {/* Test Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Test Cases</CardTitle>
            {challenge.test_cases.some(test => test.is_hidden) && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAllTests(!showAllTests)}
              >
                {showAllTests ? 'Hide Hidden Tests' : 'Show All Tests'}
              </Button>
            )}
          </div>
          <CardDescription>
            Your solution will be tested against these cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {visibleTests.map((testCase) => {
              const testResult = submission?.test_results?.find(
                result => result.test_case_id === testCase.id
              );

              return (
                <div
                  key={testCase.id}
                  className={`p-4 rounded-lg border ${
                    testResult ? getStatusColor(testResult.passed ? 'passed' : 'failed') : 'border-secondary-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {testResult && getStatusIcon(testResult.passed ? 'passed' : 'failed')}
                      <h4 className="font-medium">{testCase.name}</h4>
                      {testCase.is_hidden && (
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded-full">
                          Hidden
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {testResult ? `${testResult.points_earned}/${testCase.points}` : testCase.points} points
                    </div>
                  </div>
                  
                  <p className="text-sm text-secondary-600 mb-2">
                    {testCase.description}
                  </p>
                  
                  <div className="text-xs text-secondary-500 font-mono">
                    {testCase.test_command}
                  </div>

                  {testResult && !testResult.passed && testResult.error_message && (
                    <div className="mt-2 p-2 bg-error-50 border border-error-200 rounded text-sm text-error-700">
                      <strong>Error:</strong> {testResult.error_message}
                    </div>
                  )}

                  {testResult && testResult.execution_time_ms && (
                    <div className="mt-2 text-xs text-secondary-500">
                      Execution time: {testResult.execution_time_ms}ms
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Submission Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Submission Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {challenge.submission_requirements.map((requirement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-secondary-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* GitHub Template */}
      {challenge.github_template_repo && (
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Github className="h-8 w-8 text-secondary-600" />
              <div className="flex-1">
                <p className="text-sm text-secondary-700 mb-2">
                  Fork the template repository to get started with the challenge setup:
                </p>
                <Button variant="outline" asChild>
                  <a
                    href={challenge.github_template_repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Fork Template Repository
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submission Form */}
      <Card>
        <CardHeader>
          <CardTitle>Submit Your Solution</CardTitle>
          <CardDescription>
            Provide the GitHub repository URL containing your solution
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submission ? (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border ${getStatusColor(submission.status)}`}>
                <div className="flex items-center space-x-2 mb-2">
                  {getStatusIcon(submission.status)}
                  <span className="font-medium capitalize">{submission.status}</span>
                </div>
                
                <div className="text-sm text-secondary-600 space-y-1">
                  <p><strong>Repository:</strong> {submission.github_repo_url}</p>
                  <p><strong>Commit:</strong> {submission.commit_hash}</p>
                  <p><strong>Submitted:</strong> {new Date(submission.submitted_at).toLocaleString()}</p>
                  {submission.total_score !== undefined && (
                    <p><strong>Score:</strong> {submission.total_score}%</p>
                  )}
                </div>

                {submission.feedback && (
                  <div className="mt-3 p-3 bg-secondary-50 rounded text-sm">
                    <strong>Feedback:</strong> {submission.feedback}
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                onClick={() => setRepoUrl('')}
                className="w-full"
              >
                Submit New Version
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="GitHub Repository URL"
                placeholder="https://github.com/username/repository"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                helperText="Make sure your repository is public and contains all required files"
              />
              
              <Button
                type="submit"
                className="w-full"
                loading={isSubmitting}
                disabled={!repoUrl.trim()}
              >
                <Github className="h-4 w-4 mr-2" />
                Submit Solution
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Score Summary */}
      {submission && submission.test_results && (
        <Card>
          <CardHeader>
            <CardTitle>Test Results Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {submission.test_results.filter(r => r.passed).length}
                </div>
                <div className="text-sm text-secondary-600">Tests Passed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-error-600">
                  {submission.test_results.filter(r => !r.passed).length}
                </div>
                <div className="text-sm text-secondary-600">Tests Failed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-600">
                  {earnedPoints}/{totalPoints}
                </div>
                <div className="text-sm text-secondary-600">Points Earned</div>
              </div>
            </div>

            <div className="w-full bg-secondary-200 rounded-full h-2">
              <div
                className="bg-success-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(earnedPoints / totalPoints) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};