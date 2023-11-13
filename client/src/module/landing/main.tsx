import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "../../style.css";
import { Landing } from "./Landing";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Landing />
  </StrictMode>
);
