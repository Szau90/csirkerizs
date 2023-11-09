import { createApp } from 'vue'
import {createPinia} from 'pinia'


import './style.css'
import App from './App.vue'
import router from './router/index.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  iconfont: 'mdi'
})
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(vuetify)
app.use(router)



app.mount('#app')
