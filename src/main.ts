import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";
import './style/style.scss'

const app = createApp(App)

app.use(createPinia()).mount('#app')
