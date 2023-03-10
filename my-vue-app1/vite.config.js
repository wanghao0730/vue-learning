import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

//导入插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
  plugins: [vue(),VueSetupExtend()],
  resolve:{
    alias:[
      {
        find:'@',
        replacement:path.resolve(__dirname,'./src/')
      }
    ]
  }
})