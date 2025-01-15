<script setup>
const route = useRoute()

const items = computed(() => [{
  label: 'Features',
  to: '#features',
  active: route.hash === '#features'
}, {
  label: 'Documentation',
  to: 'https://ui.nuxt.com/pro',
  target: '_blank'
}])

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Nuxt UI Pro - Starter'
const description = 'Nuxt UI Pro is a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterImage: 'https://ui-pro-starter.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        Nuxt UI Pro
        <UBadge
          label="Starter"
          variant="subtle"
        />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/nuxt-ui-pro/starter/tree/v3"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="gray"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        Copyright © {{ new Date().getFullYear() }}
      </template>
    </UFooter>
  </UApp>
</template>
