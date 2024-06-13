import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@auth0/auth0-react": path.resolve(
        __dirname,
        "./node_modules/@auth0/auth0-react"
      ),
    },
  },
});
