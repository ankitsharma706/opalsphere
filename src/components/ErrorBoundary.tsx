import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // @ts-ignore
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      let errorMessage = 'Something went wrong.';
      try {
        // @ts-ignore
        const parsed = JSON.parse(this.state.error?.message || '');
        if (parsed.error) errorMessage = parsed.error;
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-primary p-4">
          <div className="bg-white p-10 rounded-3xl border border-accent/10 max-w-md text-center shadow-xl">
            <h2 className="text-3xl font-serif mb-4 text-secondary">Oops!</h2>
            <p className="text-secondary/60 mb-8">{errorMessage}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-secondary text-primary px-8 py-3 rounded-full font-medium"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    // @ts-ignore
    return this.props.children;
  }
}
