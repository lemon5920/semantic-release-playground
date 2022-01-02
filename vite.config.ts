import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "semantic-release-playground", // https://vitejs.dev/guide/static-deploy.html#github-pages
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  plugins: [react()],
  build: {
    outDir: "build",
  },
  server: {
    open: "/",
  },
});
