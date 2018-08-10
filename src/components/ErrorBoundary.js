import React from 'react';

/* https://reactjs.org/docs/error-boundaries.html */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h3>Something went wrong with GoogleMap. Please try again later</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary
