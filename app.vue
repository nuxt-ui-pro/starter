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
    </template>
  </UHeader>
  <UMain>
    <NuxtPage />
  </UMain>
  <UFooter>
    <template #left>
      This is my footer
    </template>
  </UFooter>
</template>
