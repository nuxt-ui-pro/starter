<script setup>
const route = useRoute()

const items = computed(() => [{
  label: 'Features',
  to: '#features',
  active: route.hash === '#features'
}, {
  label: 'Documentation',
  to: 'https://ui3.nuxt.dev',
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
        <div class="flex items-center gap-2">
          <LogoPro class="w-auto h-6 shrink-0" />
          <UDropdownMenu
            v-slot="{ open }"
            :modal="false"
            :items="[{
              label: `Starter`,
              to: 'https://starter-template.nuxt.dev/',
              checked: true,
              type: 'checkbox'
            }, {
              label: `Landing`,
              to: 'https://landing-template.nuxt.dev/'
            }, {
              label: `Docs`,
              to: 'https://docs-template.nuxt.dev/'
            }, {
              label: `SaaS`,
              to: 'https://saas-template.nuxt.dev/'
            }, {
              label: `Dashboard`,
              to: 'https://dashboard-template.nuxt.dev/'
            }]"
            :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-0' }"
            size="xs"
          >
            <UButton
              label="Starter"
              variant="subtle"
              trailing-icon="i-lucide-chevron-down"
              size="xs"
              class="-mb-[6px] font-semibold rounded-full truncate"
              :class="[open && 'bg-[var(--ui-primary)]/15 ']"
              :ui="{
                trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
              }"
            />
          </UDropdownMenu>
        </div>
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

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-(--ui-text-muted)">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/nuxt-ui-pro/starter/tree/v3"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="gray"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
