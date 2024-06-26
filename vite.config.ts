import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: "/waterfall-list-vue/",
  build: {
    outDir: 'docs'
  },
  // base: process.env.NODE_ENV === "production" ? "/waterfall-list-vue/" : "./", // 对github-page无效
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    port: 1088,
    host: "0.0.0.0",
  },
})
