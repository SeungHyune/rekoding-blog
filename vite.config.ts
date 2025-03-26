import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
});
