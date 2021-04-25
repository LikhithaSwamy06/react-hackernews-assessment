import React from "react";
import AppRouter from "./AppRouter.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
