import tailwindcss from "@tailwindcss/vite";

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
