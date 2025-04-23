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
      formats: ["es"],
      name: 'uxlib',
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ["react", "react-dom", 'react/jsx-runtime', "react-hook-form", "recharts", "@datatr-ux/ods-tailwind-config"],
      treeshake: true,
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        dir: "dist",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
