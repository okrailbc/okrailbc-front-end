import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";
import Markdown from "unplugin-vue-markdown/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    Markdown(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/_variables.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
  },
});
