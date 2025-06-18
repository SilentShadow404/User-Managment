import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      // Proper way to resolve in ESM
      "react-router-dom": require.resolve("react-router-dom"),
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
