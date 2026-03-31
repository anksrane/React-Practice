import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./BuggyComponent";
import ErrorFallback from "./ErrorFallback";
import './App.css';

export default function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        console.log("Reset clicked");
      }}
    >
      <BuggyComponent />
    </ErrorBoundary>
  );
}
