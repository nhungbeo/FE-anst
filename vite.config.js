import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const devPort = Number(env.VITE_PORT) || 5555;
  const previewPort = Number(env.VITE_PREVIEW_PORT) || 4173;

  return {
    plugins: [
      react({
        include: [/\.jsx?$/, /\.tsx?$/],
      }),
    ],
    server: {
      port: devPort,
    },
    preview: {
      port: previewPort,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.js",
      css: true,
    },
  };
});
