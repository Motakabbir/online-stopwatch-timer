<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <!-- Page header with gradient background -->
      <div class="relative mb-8 p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
        <div class="absolute inset-0 bg-white/40 dark:bg-gray-800/40 rounded-2xl backdrop-blur-sm -z-10"></div>
        <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {{ title }}
        </h1>
      </div>

      <!-- Main content -->
      <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 prose dark:prose-invert max-w-none prose-headings:text-gray-800 dark:prose-headings:text-gray-200 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style>
.prose h2 {
  @apply mt-8 mb-4 text-2xl font-semibold;
}

.prose ul {
  @apply space-y-2 list-disc list-inside;
}

.prose p {
  @apply mb-4;
}
</style>