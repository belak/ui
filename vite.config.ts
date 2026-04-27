import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@belak/ui/css": "/src/css/index.css",
      "@belak/ui/tokens": "/src/css/tokens.css",
      "@belak/ui/reset": "/src/css/reset.css",
      "@belak/ui/util": "/src/util/index.ts",
      "@belak/ui": "/src/index.ts",
    },
  },
});
