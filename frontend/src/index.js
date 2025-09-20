/**
 * This is the entry point of  React application.
 * It uses ReactDOM to render our main <App /> component into the HTML element with the id 'root'.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global styles
import App from "./App"; // main application component

// 1. Find the root DOM element in public/index.html file.
const rootElement = document.getElementById("root");

// 2. Create a React root to manage rendering for that element.
const root = ReactDOM.createRoot(rootElement);

// 3. Render our main <App /> component inside the root.
// React.StrictMode is a helper that checks for potential problems in the app during development.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
