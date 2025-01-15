import {createApp} from 'vue'
import '@/style/style.scss'
import App from '@/App.vue'
import {walkRouter} from "./walk-router.ts";

const app = createApp(App)
app.use(walkRouter)
app.mount('#app')
