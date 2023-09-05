import { defineConfig } from 'vite';

export default defineConfig({

   build: {
    outDir: './src/build',
    sourcemap: true,
   },

  root: './',

  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
});