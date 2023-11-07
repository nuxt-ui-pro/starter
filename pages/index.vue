<template>
  <div>
    <ULandingHero title="Nuxt UI Pro Starter" description="Welcome to the minimal starter of Nuxt UI Pro, Nuxt UI Pro is a collection of premium components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.">
      <template #links>
        <UButton to="#features" size="lg" icon="i-heroicons-rocket-launch">
          Get Started
        </UButton>

        <UButton to="https://ui.nuxt.com/pro/guide" size="lg" color="gray" icon="i-heroicons-book-open">
          Documentation
        </UButton>
      </template>
    </ULandingHero>

    <ULandingSection id="features" title="Features" description="An advanced set of features to let you build anything.">
      <UPageGrid>
        <ULandingCard title="First Card" description="This is my first description" color="primary" />
        <ULandingCard title="Second Card" description="This is my second description" color="fuchsia" />
        <ULandingCard title="Third Card" description="This is my third description" color="amber" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
