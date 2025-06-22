import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Play, FileText, HelpCircle, Code, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MarkdownRenderer } from '@/components/ui/markdown-renderer';
import { CodeChallengeViewer } from '@/components/ui/code-challenge-viewer';
import { useCourse } from '@/hooks/use-courses';
import { useEnrollment } from '@/hooks/use-enrollments';
import { useCodeChallenge, useCodeSubmission, useSubmitCodeChallenge } from '@/hooks/use-code-challenges';
import { getModulesByCourseId, getLessonsByModuleId, getQuizQuestionsByLessonId } from '@/data/mock-course-content';
import { useAuth } from '@/hooks/use-auth';
import type { Lesson, QuizQuestion } from '@/types';

export const LessonViewerPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { data: course } = useCourse(courseId!);
  const { data: enrollment } = useEnrollment(courseId!);
  const { data: codeChallenge } = useCodeChallenge(lessonId!);
  const { data: codeSubmission } = useCodeSubmission(
    codeChallenge?.id || '', 
    user?.id || ''
  );
  const submitCodeChallengeMutation = useSubmitCodeChallenge();
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<string, string>>({});
  const [showResults, setShowResults] = React.useState(false);

  // Get course content
  const modules = course?.modules || getModulesByCourseId(courseId!);
  const allLessons = modules.flatMap(module => 
    getLessonsByModuleId(module.id).map(lesson => ({
      ...lesson,
  const { data: challenge } = useChallenge(challengeId || '');
  const { data: enrollment } = useEnrollment(courseId || '');
  const { data: challengeEnrollment } = useChallengeEnrollment(challengeId || '');
  
  const currentLessonIndex = allLessons.findIndex(lesson => lesson.id === lessonId);
  const currentLesson = allLessons[currentLessonIndex];
  const previousLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  // Get quiz questions if this is a quiz lesson
  const quizQuestions = currentLesson?.content_type === 'quiz' 
    ? getQuizQuestionsByLessonId(lessonId!) 
    : [];

  const handleCodeSubmission = (repoUrl: string) => {
    if (codeChallenge) {
      submitCodeChallengeMutation.mutate({
        challengeId: codeChallenge.id,
        repoUrl,
      });
    }
  };

  if (!isAuthenticated || !enrollment) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">
            Access Denied
          </h1>
          <p className="text-secondary-600 mb-6">
            You need to be enrolled in this course to view lessons.
          </p>
          <Button asChild>
            <Link to={`/courses/${courseId}`}>Back to Course</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (!currentLesson) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-4">
            Lesson Not Found
          </h1>
          <p className="text-secondary-600 mb-6">
            The lesson you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to={`/courses/${courseId}`}>Back to Course</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="h-5 w-5" />;
      case 'text':
        return <FileText className="h-5 w-5" />;
      case 'quiz':
        return <HelpCircle className="h-5 w-5" />;
      case 'code_challenge':
        return <Code className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  const handleQuizSubmit = () => {
    setShowResults(true);
  };

  const calculateQuizScore = () => {
    const correctAnswers = quizQuestions.filter(
      question => selectedAnswers[question.id] === question.correct_answer
    ).length;
    return Math.round((correctAnswers / quizQuestions.length) * 100);
  };

  const renderQuizContent = () => (
    <div className="space-y-6">
      {quizQuestions.map((question, index) => (
        <Card key={question.id}>
          <CardHeader>
            <CardTitle className="text-lg">
              Question {index + 1}: {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {question.type === 'multiple_choice' && question.options && (
              <div className="space-y-3">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors duration-200 ${
                      selectedAnswers[question.id] === option
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-secondary-200 hover:bg-secondary-50'
                    } ${
                      showResults
                        ? option === question.correct_answer
                          ? 'border-success-500 bg-success-50'
                          : selectedAnswers[question.id] === option && option !== question.correct_answer
                          ? 'border-error-500 bg-error-50'
                          : ''
                        : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={selectedAnswers[question.id] === option}
                      onChange={(e) => setSelectedAnswers(prev => ({
                        ...prev,
                        [question.id]: e.target.value
                      }))}
                      disabled={showResults}
                      className="text-primary-600"
                    />
                    <span className="flex-1">{option}</span>
                    {showResults && option === question.correct_answer && (
                      <CheckCircle className="h-5 w-5 text-success-600" />
                    )}
                  </label>
                ))}
              </div>
            )}

            {question.type === 'true_false' && (
              <div className="space-y-3">
                {['true', 'false'].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors duration-200 ${
                      selectedAnswers[question.id] === option
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-secondary-200 hover:bg-secondary-50'
                    } ${
                      showResults
                        ? option === question.correct_answer
                          ? 'border-success-500 bg-success-50'
                          : selectedAnswers[question.id] === option && option !== question.correct_answer
                          ? 'border-error-500 bg-error-50'
                          : ''
                        : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={selectedAnswers[question.id] === option}
                      onChange={(e) => setSelectedAnswers(prev => ({
                        ...prev,
                        [question.id]: e.target.value
                      }))}
                      disabled={showResults}
                      className="text-primary-600"
                    />
                    <span className="flex-1 capitalize">{option}</span>
                    {showResults && option === question.correct_answer && (
                      <CheckCircle className="h-5 w-5 text-success-600" />
                    )}
                  </label>
                ))}
              </div>
            )}

            {showResults && question.explanation && (
              <div className="mt-4 p-3 bg-secondary-50 rounded-lg">
                <p className="text-sm text-secondary-700">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {!showResults ? (
        <Button 
          onClick={handleQuizSubmit}
          disabled={Object.keys(selectedAnswers).length !== quizQuestions.length}
          className="w-full"
        >
          Submit Quiz
        </Button>
      ) : (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Quiz Results
              </h3>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {calculateQuizScore()}%
              </div>
              <p className="text-secondary-600">
                You got {quizQuestions.filter(q => selectedAnswers[q.id] === q.correct_answer).length} out of {quizQuestions.length} questions correct.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderTextContent = () => (
    <MarkdownRenderer 
      content={currentLesson.content_text || 'No content available.'} 
    />
  );

  const renderVideoContent = () => (
    <div className="space-y-6">
      <div className="aspect-video bg-secondary-900 rounded-lg flex items-center justify-center">
        <div className="text-center text-white">
          <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">Video Player</p>
          <p className="text-sm opacity-75">
            {currentLesson.content_url || 'Video content would be loaded here'}
          </p>
        </div>
      </div>
      {currentLesson.content_text && (
        <MarkdownRenderer content={currentLesson.content_text} />
      )}
    </div>
  );

  const renderCodeChallengeContent = () => (
    codeChallenge ? (
      <CodeChallengeViewer
        challenge={codeChallenge}
        submission={codeSubmission}
        onSubmit={handleCodeSubmission}
        isSubmitting={submitCodeChallengeMutation.isPending}
      />
    ) : (
      <div className="space-y-6">
        <div className="bg-secondary-900 text-secondary-100 p-6 rounded-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Code className="h-5 w-5" />
            <span className="font-medium">Coding Challenge Environment</span>
          </div>
          <p className="text-sm opacity-75">
            Loading challenge details...
          </p>
        </div>
        {currentLesson.content_text && (
          <MarkdownRenderer content={currentLesson.content_text} />
        )}
      </div>
    )
  );

  const renderLessonContent = () => {
    switch (currentLesson.content_type) {
      case 'quiz':
        return renderQuizContent();
      case 'video':
        return renderVideoContent();
      case 'code_challenge':
        return renderCodeChallengeContent();
      case 'text':
      default:
        return renderTextContent();
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <div className="bg-white border-b border-secondary-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to={`/courses/${courseId}`}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Course
                </Link>
              </Button>
              <div>
                <h1 className="text-lg font-semibold text-secondary-900">
                  {currentLesson.title}
                </h1>
                <p className="text-sm text-secondary-600">
                  {currentLesson.moduleTitle} • Lesson {currentLessonIndex + 1} of {allLessons.length}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {getContentTypeIcon(currentLesson.content_type)}
              <span className="text-sm text-secondary-600 capitalize">
                {currentLesson.content_type.replace('_', ' ')}
              </span>
              {currentLesson.duration_minutes && (
                <>
                  <span className="text-secondary-400">•</span>
                  <div className="flex items-center space-x-1 text-sm text-secondary-600">
                    <Clock className="h-4 w-4" />
                    <span>{currentLesson.duration_minutes} min</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {getContentTypeIcon(currentLesson.content_type)}
                  <span>{currentLesson.title}</span>
                </CardTitle>
                <CardDescription>
                  {currentLesson.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {renderLessonContent()}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {previousLesson ? (
                <Button variant="outline" asChild>
                  <Link to={`/courses/${courseId}/lessons/${previousLesson.id}`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous: {previousLesson.title}
                  </Link>
                </Button>
              ) : (
                <div />
              )}

              {nextLesson ? (
                <Button asChild>
                  <Link to={`/courses/${courseId}/lessons/${nextLesson.id}`}>
                    Next: {nextLesson.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" asChild>
                  <Link to={`/courses/${courseId}`}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Course Complete
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-secondary-600">Progress</span>
                      <span className="font-medium">
                        {Math.round(((currentLessonIndex + 1) / allLessons.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${((currentLessonIndex + 1) / allLessons.length) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-secondary-900">All Lessons</h4>
                    <div className="max-h-96 overflow-y-auto space-y-1">
                      {allLessons.map((lesson, index) => (
                        <Link
                          key={lesson.id}
                          to={`/courses/${courseId}/lessons/${lesson.id}`}
                          className={`block p-2 rounded-lg text-sm transition-colors duration-200 ${
                            lesson.id === lessonId
                              ? 'bg-primary-100 text-primary-700 border border-primary-200'
                              : 'text-secondary-700 hover:bg-secondary-100'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <div className="flex-shrink-0">
                              {getContentTypeIcon(lesson.content_type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">
                                {index + 1}. {lesson.title}
                              </div>
                              <div className="text-xs text-secondary-500 truncate">
                                {lesson.moduleTitle}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};