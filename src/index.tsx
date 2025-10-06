import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TextareaFieldScreen } from "./screens/TextareaFieldScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TextareaFieldScreen />
  </StrictMode>,
);
