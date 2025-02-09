import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ErrorBoundary from "./app/common/ErrorBoundary.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </Router>
  </Provider>
);
