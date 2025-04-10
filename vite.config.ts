import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: [
      ".gitpod.io", // Permite acesso externo no Gitpod
    ],
  },
});
