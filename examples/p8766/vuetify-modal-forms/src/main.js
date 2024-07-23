import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  display: {
    mobileBreakpoint: 'sm'
  }
})

const app = createApp(App)

app.use(vuetify).use(createPinia())

app.mount('#app')