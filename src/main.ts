import {createApp} from 'vue'
import '@/style/style.scss'
import App from '@/App.vue'
import {walkRouter} from "./walk-router.ts";
import Container from "./components/layout/Container.vue";

const app = createApp(App)
app.use(walkRouter)
app.component('Container', Container)
app.mount('#app')
