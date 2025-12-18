// Import styles, initialize component theme here.
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Import Vue and Vuetify
import type { App } from 'vue'
import { createVuetify } from 'vuetify'

// Create Vuetify instance
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
})

// Export function to configure Vue app with Vuetify
// This will be called by Playwright CT for each component test
export async function beforeMount({ app }: { app: App }) {
  app.use(vuetify)
}

// Export Vuetify instance for direct use in tests if needed
export { vuetify }
