// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false }
})
