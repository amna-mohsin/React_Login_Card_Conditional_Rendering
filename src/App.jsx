import { useState } from "react";
import "./App.css";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="wrapper">
      <div className="card">
        <h1 className="title">
          {isLoggedIn ? "Welcome back!" : "Please log in"}
        </h1>
        <p className="subtitle">
          {isLoggedIn ? "You are successfully logged in." : "Please Login to get access to your account."}
        </p>
        <button
          className="btn"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}
export default App;
