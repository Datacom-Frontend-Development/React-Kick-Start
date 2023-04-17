import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@infrastructure": path.resolve(__dirname, "src/infrastructure/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@features": path.resolve(__dirname, "src/features/"),
    },
  },
  esbuild: {
    define: {
      this: "window",
    },
  },
});
