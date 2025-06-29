import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { clsx } from 'clsx';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  content, 
  className 
}) => {
  const components: Components = {
    // Custom heading styles
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-secondary-900 mb-6 mt-8 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-secondary-900 mb-4 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-secondary-900 mb-3 mt-5">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-secondary-900 mb-2 mt-4">
        {children}
      </h4>
    ),
    // Custom paragraph styles
    p: ({ children }) => (
      <p className="text-secondary-700 mb-4 leading-relaxed">
        {children}
      </p>
    ),
    // Custom list styles
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-secondary-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-secondary-700">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    // Custom code styles
    code: ({ inline, children, className }) => {
      if (inline) {
        return (
          <code className="bg-secondary-100 text-secondary-800 px-1.5 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        );
      }
      return (
        <code className={clsx('block', className)}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-secondary-900 text-secondary-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    // Custom blockquote styles
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 py-2 mb-4 bg-primary-50 text-secondary-700 italic">
        {children}
      </blockquote>
    ),
    // Custom table styles
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-secondary-200 rounded-lg">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-secondary-50">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold text-secondary-900 border-b border-secondary-200">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-secondary-700 border-b border-secondary-200">
        {children}
      </td>
    ),
    // Custom link styles
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary-600 hover:text-primary-700 underline transition-colors duration-200"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    // Custom horizontal rule
    hr: () => (
      <hr className="border-secondary-200 my-6" />
    ),
  };

  return (
    <div className={clsx('prose prose-lg max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};