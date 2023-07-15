import { Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Users from "./components/Users";

const ThereWasAnError = () => <div>Oops! There was an error.</div>;

function App() {
  return (
    <>
      <ErrorBoundary fallback={<ThereWasAnError />}>
        <Suspense fallback={<div>Loading...</div>}>
          <Users />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
