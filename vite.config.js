import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import WindiCSS from "vite-plugin-windicss";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(), WindiCSS()],
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    https: false,
    port: 3000,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
