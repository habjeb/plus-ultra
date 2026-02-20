import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./components/ErrorBoundary";
import App from "./App.tsx";
import "./index.css";
import "./styles/globals.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  console.error("Root element #root not found. Check index.html.");
} else {
  createRoot(rootEl).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
