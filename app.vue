<script setup>
const links = [{
  label: 'Features',
  to: '#features',
  exactHash: true
}, {
  label: 'Documentation',
  to: 'https://ui.nuxt.com/pro/guide',
  target: '_blank'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt UI Pro
    </template>

    <template #right>
      <UColorModeButton />

      <UButton to="https://github.com/nuxt-ui-pro/starter" target="_blank" icon="i-simple-icons-github" aria-label="GitHub" color="gray" variant="ghost" />
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
</template>
