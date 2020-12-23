import React, { Component } from 'react';
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    static getDerivedStateFromError(error) {
        return { hasError:true }
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>{this.state.errorMessage.message}</h1>
                    <p>This error rendered correctly.</p>
                </div>
            );
        } else {
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;