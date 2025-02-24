<template>
  <header class="sticky top-0 z-50 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-b border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo and brand -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
            Online Timer
          </h1>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to" 
            :to="link.to" 
            class="relative text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 py-2"
            :class="{ 
              'text-blue-600 dark:text-blue-400': $route.path === link.to,
              'hover:text-blue-700 dark:hover:text-blue-300': $route.path === link.to
            }"
          >
            <span>{{ link.text }}</span>
            <span 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-200 origin-left"
              :class="$route.path === link.to ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'"
            ></span>
          </NuxtLink>
        </nav>

        <!-- Dark mode toggle and mobile menu -->
        <div class="flex items-center space-x-4">
          <button 
            @click="toggleDarkMode" 
            class="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            :title="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <span class="sr-only">Toggle dark mode</span>
            <transition name="fade" mode="out-in">
              <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </transition>
          </button>
          
          <!-- Mobile menu button -->
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            <span class="sr-only">Open menu</span>
            <svg 
              class="h-5 w-5 text-gray-600 dark:text-gray-400" 
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              class="h-5 w-5 text-gray-600 dark:text-gray-400" 
              :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <nav v-if="isMenuOpen" class="md:hidden py-4 space-y-2">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to" 
            :to="link.to" 
            class="block px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
            :class="{
              'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400': $route.path === link.to
            }"
            @click="isMenuOpen = false"
          >
            {{ link.text }}
          </NuxtLink>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/privacy-policy', text: 'Privacy' },
  { to: '/terms-of-service', text: 'Terms' }
]

onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains('dark')
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>