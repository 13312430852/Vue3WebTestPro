import { createApp } from 'vue'
import App from './App.vue'
import '../mock/mock.ts'
// eslint-disable-next-line import/order
import axios from "axios"
import VueAxios from "vue-axios";




const app = createApp(App)
app.use(VueAxios, axios)

app.mount('#app')
