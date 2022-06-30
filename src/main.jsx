import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <React.Suspense fallback={null}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  // </React.StrictMode>
);
