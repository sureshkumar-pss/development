import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), //  Vite plugin that resolves TypeScript paths defined in tsconfig.
    viteTsconfigPaths(),
    // Vite plugin for transforming SVG files using SVGR.
    svgrPlugin(),
  ],
  server: {
    // Whether to automatically open a browser on server start
    open: true,
  },
});
