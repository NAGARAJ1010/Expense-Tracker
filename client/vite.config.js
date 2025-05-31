import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fluid, { extract } from "fluid-tailwind";

// https://vite.dev/config/
export default defineConfig({
  content: {
    files: [],
    extract,
  },
  plugins: [react()],
});
