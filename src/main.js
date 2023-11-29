import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import {lazyPlugin} from '@/directives'
// 测试接口函数
import {getCategoryAPI} from '@/apis/testAPI'

getCategoryAPI().then(res =>{
    console.log(res)
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
