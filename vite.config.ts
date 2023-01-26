import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cjs from "rollup-plugin-cjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      plugins: [cjs()],
    },
    commonjsOptions: {
      exclude: [/./],
    },
  },
});
