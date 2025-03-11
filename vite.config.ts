import path from "path"
import react from "@vitejs/plugin-react"
import dts from 'vite-plugin-dts';
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(),
    dts({
      outDir: 'dist',
      include: ['src/**/*'], // Only include files from src/types
      exclude: ['src/demo']
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: ["src/index.ts"],
      cssFileName: 'style',
      name: 'uxlib'
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      treeshake: true,
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
