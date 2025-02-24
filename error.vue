<template>
  <NuxtLayout name="content" :title="error.statusCode === 404 ? 'Page Not Found' : 'Error'">
    <div class="text-center">
      <h2 class="text-2xl mb-4">{{ error.statusCode === 404 ? 'Page Not Found' : 'An Error Occurred' }}</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">{{ error.message }}</p>
      <NuxtLink 
        to="/" 
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        Return Home
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object
})

useHead({
  title: props.error?.statusCode === 404 ? '404 - Page Not Found' : 'Error - Online Stopwatch & Timer',
  meta: [
    {
      name: 'description',
      content: 'The page you are looking for could not be found. Return to our online stopwatch and timer application.'
    },
    {
      name: 'robots',
      content: 'noindex'
    }
  ]
})
</script>