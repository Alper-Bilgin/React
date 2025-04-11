import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // consol da iki defa çalışma nedeni bura
  <StrictMode>
    <App />
  </StrictMode>
);
