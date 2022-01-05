import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

var baseConfig = {
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        sourceMap: true,
        modifyVars: {
          'border-radius-base': '6px',
        },
      },
    },
  },
  server: {
    port: 2002,
    proxy: {
      '/v2': 'https://www.mocky.io/',
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(function (script) {
  if (script.command === 'build') {
    return {
      ...baseConfig,
    }
  } else {
    return baseConfig
  }
})
