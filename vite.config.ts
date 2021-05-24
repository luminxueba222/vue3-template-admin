import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss'

import { modifyVars } from './build/config/modifyVars';
const pathResolve = (dir: string): any => {
    return resolve(__dirname, ".", dir);
  };
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(), styleImport({
    libs: [{
      libraryName: 'ant-design-vue',
      esModule: true,
      resolveStyle: (name) => {
        return `ant-design-vue/es/${name}/style/css`;
      },
    }]
  })
],
  resolve: {
    alias:{
    '@': pathResolve('src') ,
    'components': pathResolve('src/components') ,
    'store': pathResolve('src/store') ,
    'utils': pathResolve('src/utils') ,
    'style': pathResolve('src/style') ,
    }
    // alias: [  
    //   {
    //     find: /\/@\//,
    //     replacement: pathResolve('src') + '/',
    //   },
    // ]
  },
    // resolve: {
    //     alias: [
    //     {
    //         find: /\/@\//,
    //         replacement: pathResolve('src') + '/',
    //     },
    //     ],
    // },
  build: {
    // 去除console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars,
        javascriptEnabled: true,
      },
    },
  },
})
