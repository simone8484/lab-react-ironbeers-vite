import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/theme.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </Router>
  </React.StrictMode>
);
