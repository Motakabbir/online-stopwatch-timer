<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Online Stopwatch & Timer",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Any",
        "description": "Free online stopwatch and countdown timer with lap timing, customizable alerts, and dark mode support.",
        "browserRequirements": "Requires JavaScript. Works on all modern browsers.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Precise stopwatch with lap timing",
          "Customizable countdown timer",
          "Dark mode support",
          "Works offline",
          "No registration required"
        ]
      })
    }
  ]
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
