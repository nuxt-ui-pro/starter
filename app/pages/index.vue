<template>
  <div>
    <UPageHero
      title="Nuxt UI Pro - Starter"
      description="Nuxt UI Pro is a collection of premium components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes."
      :links="[{
        label: 'Installation',
        to: 'https://ui3.nuxt.dev/getting-started/installation/pro/nuxt#use-an-official-template',
        target: '_blank',
        icon: 'i-lucide-square-play',
        size: 'lg'
      }, {
        label: 'Components',
        to: 'https://ui3.nuxt.dev/components',
        target: '_blank',
        icon: 'i-lucide-box',
        size: 'lg',
        color: 'neutral'
      }]"
    />

    <UPageSection
      id="features"
      title="The freedom to build anything"
      description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases. Carefully crafted to reduce boilerplate code without sacrificing flexibility."
      :features="[{
        icon: 'i-lucide-wrench',
        title: 'Fully customizable',
        description: 'Customize any component through the App Config or fine-tune specific instances with the ui prop, just like Nuxt UI.'
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
        title="Ready to get started?"
        description="Nuxt UI Pro is free in development, but you need a license to use it in production."
        variant="subtle"
        :links="[{
          label: 'Buy now',
          to: 'https://ui.nuxt.com/pro/purchase',
          target: '_blank',
          icon: 'i-lucide-shopping-cart',
          size: 'lg',
          color: 'neutral'
        }, {
          label: 'License',
          to: 'https://ui3.nuxt.dev/getting-started/license',
          target: '_blank',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'lg',
          color: 'neutral',
          variant: 'outline'
        }]"
      />
    </UPageSection>
  </div>
</template>
