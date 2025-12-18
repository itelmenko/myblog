// Import styles, initialize component theme here.
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Playwright CT hooks (required: exporting beforeMount is NOT enough)
import { beforeMount } from '@playwright/experimental-ct-vue/hooks'

// Import Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
  },
})

// Configure Vue app for each component test
beforeMount(async ({ app }) => {
  app.use(vuetify)
})

// Export Vuetify instance for direct use in tests if needed
export { vuetify }
