import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  server: {
    host: "localhost",
    port: 8080,
  },
  build: {
    outDir: "docs",
  },
});
