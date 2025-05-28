// vite.config.js
import { defineConfig, loadEnv } from "vite";
import reactPlugin from "@vitejs/plugin-react"; // <– nota il nome diverso
import path from "path";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return defineConfig({
    base: "./",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "~components": path.resolve(__dirname, "./src/components"),
      },
    },
    define: {
      __API_URL__: JSON.stringify(env.VITE_API_URL),
    },
    build: {
      target: "esnext",
      sourcemap: mode !== "production",
      chunkSizeWarningLimit: 600,
    },
    plugins: [
      reactPlugin(), // <– invocazione corretta
    ],
    server: {
      port: Number(env.VITE_DEV_PORT) || 3000,
      open: true,
    },
  });
};
