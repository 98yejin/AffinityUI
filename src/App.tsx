// App.tsx
import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <LoadingSpinner size="small" color="#007bff" />
      ) : (
        <h1>Content Loaded!</h1>
      )}
    </div>
  );
};

export default App;
