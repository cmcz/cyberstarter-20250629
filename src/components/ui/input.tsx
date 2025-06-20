import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-secondary-700 mb-1"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={clsx(
            'block w-full rounded-lg border border-secondary-300 px-3 py-2 text-secondary-900 placeholder-secondary-400 shadow-sm transition-colors duration-200',
            'focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500',
            'disabled:bg-secondary-50 disabled:text-secondary-500 disabled:cursor-not-allowed',
            error && 'border-error-500 focus:border-error-500 focus:ring-error-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-secondary-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };