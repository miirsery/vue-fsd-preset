import { fileURLToPath, URL } from 'node:url'
import path from 'path'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import EnvironmentPlugin from 'vite-plugin-environment'

import EslintPlugin from 'vite-plugin-eslint'
import StyleLintPlugin from 'vite-plugin-stylelint'
import VitePluginFonts from 'vite-plugin-fonts'

// TODO: Разобраться с ошибкой импортов
// import { API_URL } from './src/shared/config'

const styleLintConfig = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
})

const eslintConfig = EslintPlugin({
  fix: true,
  cache: false,
})

const fontsConfig = VitePluginFonts({
  custom: {
    families: [
      {
        name: 'SourceSansPro',
        local: 'SourceSansPro',
        src: './src/styles/fonts/*.ttf',
      },
    ],
  },
})

const svgIconsConfig = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/shared/assets/icons')],
  symbolId: 'icon-[dir]-[name]',
  inject: 'body-first',
  customDomId: '__svg__icons__dom__',
})

const envConfig = EnvironmentPlugin('all', { prefix: 'VITE_' })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue(), styleLintConfig, eslintConfig, fontsConfig, svgIconsConfig, envConfig],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/app/styles/resources" as *;',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
