import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //The getDerivedStateFromError() method is invoked if some error occurs during the
  //rendering phase of any lifecycle methods or any children components.
  static getDerivedStateFromError(error) {
    //update error state
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    console.log("error, errorInfo", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // throw new Error("New Error");
      return <h1>Something went wrong !</h1>;
    }

    return this.props.children;
  }
}

//  <ErrorBoundary title="" >
//    <COunter>
//     <Posts/>
//  </COunter>
//  </ErrorBoundary>
