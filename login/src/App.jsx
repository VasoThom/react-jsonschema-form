import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LoginForm from "./components/LoginForm.jsx";

function App() {
  return (
    <div className="App">
      <h1>Login mit react jsonschema</h1>
      <LoginForm />
    </div>
  );
}

export default App;
