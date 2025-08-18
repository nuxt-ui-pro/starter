<template>
  <div>
    <UPageHero
      title="Nuxt UI - Starter"
      description="Nuxt UI is a free and open-source UI library for Nuxt applications. Create beautiful & responsive applications in minutes."
      :links="[{
        label: 'Get started',
        to: 'https://ui.nuxt.com/getting-started/installation/nuxt',
        target: '_blank',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl'
      }, {
        label: 'Use this template',
        to: 'https://github.com/nuxt-ui-pro/starter',
        target: '_blank',
        icon: 'i-simple-icons-github',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
    />

    <UPageSection
      id="features"
      title="The freedom to build anything"
      description="Nuxt UI ships with a comprehensive set of components that cover a wide range of use-cases. Carefully crafted to reduce boilerplate code without sacrificing flexibility."
      :features="[{
        icon: 'i-lucide-wrench',
        title: 'Fully customizable',
        description: 'Customize any component through the App Config or fine-tune specific instances with the ui prop for maximum flexibility.'
      }, {
        icon: 'i-lucide-square-stack',
        title: 'Powerful slot system',
        description: 'Take full control of component layouts and content with Vue\'s comprehensive slot system for maximum flexibility.'
      }, {
        icon: 'i-lucide-smartphone',
        title: 'Mobile-first & responsive',
        description: 'Built with a mobile-first approach, all components automatically adapt to any screen size while maintaining a polished look.'
      }]"
    />

    <UPageSection>
      <UPageCTA
        title="Start with Nuxt UI today!"
        description="Nuxt UI is a free and open-source UI library for Nuxt applications."
        variant="subtle"
        :links="[{
          label: 'Get started',
          to: 'https://ui.nuxt.com/getting-started/installation/nuxt',
          target: '_blank',
          icon: 'i-lucide-arrow-right',
          color: 'neutral'
        }, {
          label: 'GitHub',
          to: 'https://github.com/nuxt-ui-pro/starter',
          target: '_blank',
          trailingIcon: 'i-simple-icons-github',
          color: 'neutral',
          variant: 'subtle'
        }]"
      />
    </UPageSection>
  </div>
</template>
