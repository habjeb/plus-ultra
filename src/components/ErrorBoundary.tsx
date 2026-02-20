import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#020617",
            color: "#e2e8f0",
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ color: "#f87171", marginBottom: "1rem" }}>
            Une erreur s&apos;est produite
          </h1>
          <pre
            style={{
              background: "#1e293b",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflow: "auto",
              fontSize: "0.875rem",
            }}
          >
            {this.state.error.message}
          </pre>
          <p style={{ marginTop: "1rem", opacity: 0.8 }}>
            Ouvre la console (F12) pour plus de détails.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
