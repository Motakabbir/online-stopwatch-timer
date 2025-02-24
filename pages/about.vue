<!-- About page -->
<template>
  <NuxtLayout name="content" :title="'About Online Stopwatch & Timer'">
    <p>Welcome to our Online Stopwatch & Timer application! This tool was created to provide a simple, reliable, and user-friendly way to track time and set countdowns.</p>
    
    <h2>Features</h2>
    <ul>
      <li>Precise stopwatch with lap timing</li>
      <li>Customizable countdown timer</li>
      <li>Clean, modern interface</li>
      <li>Works offline</li>
      <li>Dark mode support</li>
    </ul>
    
    <h2>How to Use</h2>
    <p>Simply choose between the stopwatch or timer function from the main page. The interface is intuitive and designed to be easy to use on any device.</p>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'About - Online Stopwatch & Timer',
  meta: [
    {
      name: 'description',
      content: 'Learn about our free online stopwatch and timer application. Features include lap timing, customizable alerts, offline support, and dark mode for comfortable viewing.'
    },
    {
      name: 'keywords',
      content: 'about stopwatch timer, timer features, digital time tools, online time tracking, stopwatch application'
    }
  ]
})
</script>