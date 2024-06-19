// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  routeRules: {
    '/': { prerender: true }
  },
  devtools: {
    enabled: true
  },
  future: {
    compatibilityVersion: 4
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
