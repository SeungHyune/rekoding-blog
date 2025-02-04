import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/index.tsx";
import "./styles/global.css";

async function enableMocking() {
  if (import.meta.env.VITE_NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Router />
    </StrictMode>,
  );
});
