import { defineConfig } from 'vite';

export default defineConfig({

   build: {
    outDir: 'build',
    sourcemap: true,
   },

  root: './src',

  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ]
});