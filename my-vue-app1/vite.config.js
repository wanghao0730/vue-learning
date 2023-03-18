import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

//组件自动导入
import Components from 'unplugin-vue-components/vite'
//所需组件的resolve
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
//导入插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
//修改配置自动重启
import ViteRestart from 'vite-plugin-restart'
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    ViteRestart({
      restart:[
        'vite.config.js',
        'main.js'
      ]
    }),
    Components({
    resolvers:[
      AntDesignVueResolver()
    ]
   })
  ],
  resolve:{
    alias:[
      {
        find:'@',
        replacement:path.resolve(__dirname,'./src/')
      },
    ]
  }
})