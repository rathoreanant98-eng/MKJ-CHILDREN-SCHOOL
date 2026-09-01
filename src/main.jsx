import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import "./production.css";
import "./v2.css";
import "./experience.css";
import "./qa.css";
import "./hardening.css";
import "./premium-global.css";
import "./cinematic.css";
import "./campus-scroll.css";
import "./anchor-navigation.css";
import "./purpose-rhythm.css";
import "./academics-polish.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
