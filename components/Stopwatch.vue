<template>
  <div class="timer-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <h2 class="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Stopwatch
    </h2>

    <!-- Time Display -->
    <div class="timer-display text-center mb-8">
      {{ formattedTime }}
    </div>

    <!-- Lap Times -->
    <div class="mb-8 bg-gray-50 dark:bg-gray-700/50 rounded-xl max-h-60 overflow-y-auto">
      <div v-for="(lap, index) in laps" :key="index" 
           class="flex justify-between py-3 px-6 border-b border-gray-200 dark:border-gray-600 last:border-0">
        <span class="font-medium text-gray-700 dark:text-gray-300">Lap {{ laps.length - index }}</span>
        <span class="font-mono text-gray-800 dark:text-gray-200">{{ formatLapTime(lap) }}</span>
      </div>
    </div>

    <!-- Controls -->
    <div class="mt-auto">
      <div class="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
        <button
          @click="startStopwatch"
          :disabled="isRunning"
          class="start-button inline-flex items-center"
        >
          <PlayIcon class="w-5 h-5 mr-1" />
          Start
          <span class="text-sm opacity-75 ml-1">(Space)</span>
        </button>
        <button
          @click="pauseStopwatch"
          :disabled="!isRunning"
          class="pause-button inline-flex items-center"
        >
          <PauseIcon class="w-5 h-5 mr-1" />
          Pause
          <span class="text-sm opacity-75 ml-1">(P)</span>
        </button>
        <button
          @click="recordLap"
          :disabled="!isRunning"
          class="lap-button inline-flex items-center"
        >
          <ClockIcon class="w-5 h-5 mr-1" />
          Lap
          <span class="text-sm opacity-75 ml-1">(L)</span>
        </button>
        <button
          @click="resetStopwatch"
          class="reset-button inline-flex items-center"
        >
          <ArrowPathIcon class="w-5 h-5 mr-1" />
          Reset
          <span class="text-sm opacity-75 ml-1">(Esc)</span>
        </button>
      </div>

      <!-- Share Link -->
      <div class="mt-4 text-center">
        <button
          @click="copyShareLink"
          class="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 transition-colors duration-200 inline-flex items-center"
        >
          <LinkIcon class="w-4 h-4 mr-1" />
          Copy Share Link
        </button>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { PlayIcon, PauseIcon, ArrowPathIcon, LinkIcon, ClockIcon } from '@heroicons/vue/24/solid'

const time = ref(0)
const isRunning = ref(false)
const laps = ref([])
let stopwatchInterval = null
let startTime = 0
let lastLapTime = 0

const formattedTime = computed(() => {
  const hours = Math.floor(time.value / 3600000)
  const minutes = Math.floor((time.value % 3600000) / 60000)
  const seconds = Math.floor((time.value % 60000) / 1000)
  const milliseconds = Math.floor((time.value % 1000) / 10)
  
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
})

const startStopwatch = () => {
  if (!isRunning.value) {
    isRunning.value = true
    startTime = Date.now() - time.value
    lastLapTime = startTime
    stopwatchInterval = requestAnimationFrame(updateTime)
  }
}

const updateTime = () => {
  if (isRunning.value) {
    time.value = Date.now() - startTime
    stopwatchInterval = requestAnimationFrame(updateTime)
  }
}

const pauseStopwatch = () => {
  isRunning.value = false
  if (stopwatchInterval) {
    cancelAnimationFrame(stopwatchInterval)
  }
  saveState()
}

const resetStopwatch = () => {
  isRunning.value = false
  if (stopwatchInterval) {
    cancelAnimationFrame(stopwatchInterval)
  }
  time.value = 0
  laps.value = []
  startTime = 0
  lastLapTime = 0
  saveState()
}

const recordLap = () => {
  const currentTime = Date.now()
  const lapTime = currentTime - lastLapTime
  laps.value.unshift(lapTime)
  lastLapTime = currentTime
  saveState()
}

const formatLapTime = (lapTime) => {
  const minutes = Math.floor(lapTime / 60000)
  const seconds = Math.floor((lapTime % 60000) / 1000)
  const milliseconds = Math.floor((lapTime % 1000) / 10)
  
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`
}

const saveState = () => {
  localStorage.setItem('stopwatch', JSON.stringify({
    time: time.value,
    isRunning: isRunning.value,
    laps: laps.value
  }))
}

const loadState = () => {
  const saved = localStorage.getItem('stopwatch')
  if (saved) {
    const { time: savedTime, isRunning: savedIsRunning, laps: savedLaps } = JSON.parse(saved)
    time.value = savedTime
    laps.value = savedLaps
    if (savedIsRunning) {
      startStopwatch()
    }
  }
}

const handleKeydown = (event) => {
  if (event.code === 'Space' && !isRunning.value) {
    event.preventDefault()
    startStopwatch()
  } else if (event.code === 'KeyP' && isRunning.value) {
    pauseStopwatch()
  } else if (event.code === 'KeyL' && isRunning.value) {
    recordLap()
  } else if (event.code === 'Escape') {
    resetStopwatch()
  }
}

onMounted(() => {
  loadState()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (stopwatchInterval) {
    cancelAnimationFrame(stopwatchInterval)
  }
})
</script>

<style scoped>
.laps-container {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.laps-container::-webkit-scrollbar {
  width: 6px;
}

.laps-container::-webkit-scrollbar-track {
  background: transparent;
}

.laps-container::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}
</style>