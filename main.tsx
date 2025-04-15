// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";  // Certifique-se de que "App.tsx" está na raiz
import "./index.css";  // Certifique-se de que o caminho está correto


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

