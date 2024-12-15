import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    //reconocimiento de archivos spec.ts
    baseUrl: 'http://127.0.0.1:8000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
    },
  },
});
