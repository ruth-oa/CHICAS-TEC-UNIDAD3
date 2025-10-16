import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import {UserProvider} from "./context/userContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>

  </React.StrictMode>
);
