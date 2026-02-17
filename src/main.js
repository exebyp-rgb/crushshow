import { createApp } from 'vue'
import App from './App.vue'

const APP_ID = import.meta.env.VITE_BASE44_APP_ID
const API_URL = import.meta.env.VITE_BASE44_API_URL

console.log('Base44 Config:', { APP_ID, API_URL })

createApp(App).mount('#app')
