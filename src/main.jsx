import React from "react";
import ReactDOM from "react-dom/client";

// import "./styles/global.css";
// import "./styles/theme.css";
// import "./styles/navbar.css";
// import "./styles/hero.css";
// import "./styles/about.css";
// import "./styles/skills.css";
// import "./styles/projects.css";
// import "./styles/contact.css";
// import "./styles/footer.css";

import App from "./App";
import "./index.css";

import ThemeProvider from "./ui/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);