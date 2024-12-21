import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: 'cypress/components/**/*.cy.{js,jsx,ts,tsx}', // Путь к компонентным тестам
  },

  viewportWidth: 1000,
  viewportHeight: 900,
});
