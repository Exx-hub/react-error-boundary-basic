/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // running specific something when an error occurs
    console.log("info", info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Higher order component

// default behavior in react is when there is an error, it renders a blank page

// this is the solution for that, render a fallback ui when there are errors

// anytime ErrorBoundary component or any children of it throws an error,
// getDerivedStateFromError will be called, and it will update the state of ErrorBoundary component
// so whenever there is an error within the error boundary component, hasError will be set to true because of  getDerivedStateFromError
// and based on hasError, error boundary will render either the fallback, or normally the children if no error

// also component did catch will also be called whenever there is error
