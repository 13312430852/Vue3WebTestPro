import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

const HOST = process.env.host
const PORT = process.env.port && Number(process.env.port)

const { resolve } = require('path')

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    plugins: [vue()],
    server: {
        host: HOST || '0.0.0.0',
        port: PORT || '8080'
    }
})
