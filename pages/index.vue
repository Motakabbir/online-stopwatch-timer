<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-12">
      Online Stopwatch & Timer
    </h1>
    
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CountdownTimer />
        <Stopwatch />
      </div>
    </div>
  </div>
</template>

<script setup>
import CountdownTimer from '@/components/CountdownTimer.vue'

useHead({
  title: 'Online Stopwatch & Timer - Free Digital Time Tools',
  meta: [
    {
      name: 'description',
      content: 'Free online stopwatch and countdown timer with lap timing, customizable alerts, and dark mode. Perfect for sports, workouts, cooking, and studying.'
    },
    {
      name: 'keywords',
      content: 'online stopwatch, digital timer, countdown timer, lap timer, time keeper, work timer, study timer, exercise timer'
    }
  ]
})
</script>