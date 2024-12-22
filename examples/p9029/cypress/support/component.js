// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { mount } from 'cypress/vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Подключение стилей Vuetify

Cypress.Commands.add('mount', (component, options = {}) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
    },
  });

  const defaultOptions = {
    global: {
      plugins: [vuetify],
    },
  };

  return mount(component, { ...defaultOptions, ...options });
});
