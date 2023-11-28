import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// 导入对应包
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // elementPlus按需引入配置
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver({importStyle: 'sass'})],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // 自动导入scss文件
                additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `,
            }
        }
    }
})
