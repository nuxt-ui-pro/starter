<template>
  <div>
    <ULandingHero
      title="Nuxt UI Pro - Starter"
      description="Nuxt UI Pro is a collection of premium components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes."
    >
      <template #links>
        <UButton
          to="https://ui.nuxt.com/pro/guide"
          target="_blank"
          size="lg"
          icon="i-heroicons-book-open"
        >
          Guide
        </UButton>

        <UButton
          to="https://ui.nuxt.com/pro/components"
          target="_blank"
          size="lg"
          color="gray"
          icon="i-heroicons-cube-transparent"
        >
          Components
        </UButton>
      </template>
    </ULandingHero>

    <ULandingSection
      id="features"
      title="The freedom to build anything"
    >
      <template #description>
        Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases.<br> Carefully crafted to reduce boilerplate code without sacrificing flexibility.
      </template>

      <UPageGrid>
        <UPageCard
          icon="i-heroicons-wrench-screwdriver"
          title="Fully customizable"
          description="Like Nuxt UI, change the style of any component from your App Config or customize them specifically through the ui prop."
        />
        <UPageCard
          icon="i-heroicons-square-3-stack-3d"
          title="Slots for everything"
          description="Each component leverages the power of Vue's slots to give you the flexibility to build anything."
        />
        <UPageCard
          icon="i-heroicons-device-phone-mobile"
          title="Responsive by design"
          description="Nuxt UI Pro components aims to structure your content, they are responsive by design and will adapt to any screen size."
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA
        title="Ready to get started?"
        description="Nuxt UI Pro is free in development, but you need a license to use it in production."
      >
        <template #links>
          <UButton
            to="https://ui.nuxt.com/pro/purchase"
            target="_blank"
            size="lg"
            color="black"
            icon="i-heroicons-credit-card"
          >
            Buy now
          </UButton>
          <UButton
            to="https://ui.nuxt.com/pro/guide#license"
            target="_blank"
            size="lg"
            color="gray"
            trailing-icon="i-heroicons-arrow-right-20-solid"
          >
            License
          </UButton>
        </template>
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>
