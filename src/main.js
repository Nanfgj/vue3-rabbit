import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import {lazyPlugin} from '@/directives'
import {componentPlugin} from "@/components";
// 测试接口函数
import {getCategoryAPI} from '@/apis/testAPI'

getCategoryAPI().then(res =>{
    console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
