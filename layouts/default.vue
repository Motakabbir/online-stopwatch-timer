<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
    <AppHeader />
    
    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>