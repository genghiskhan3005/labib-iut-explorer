// Client-only bootstrap for the static GitHub Pages build (see
// gh-pages/index.html and vite.gh-pages.config.ts). This mounts the same
// app as the normal SSR entry, but via createRoot instead of hydrateRoot —
// there is no server-rendered markup to hydrate on a static host.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./styles.css";
import { getRouter } from "./router";

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
