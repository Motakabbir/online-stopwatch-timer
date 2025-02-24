<template>
  <div class="timer-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <h2 class="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Countdown Timer
    </h2>
    
    <!-- Time Input -->
    <div class="grid grid-cols-3 gap-6 mb-8">
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Hours</label>
        <input
          type="number"
          v-model="hours"
          min="0"
          max="99"
          class="time-input"
          @keydown.enter="startTimer"
        >
      </div>
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Minutes</label>
        <input
          type="number"
          v-model="minutes"
          min="0"
          max="59"
          class="time-input"
          @keydown.enter="startTimer"
        >
      </div>
      <div class="flex flex-col">
        <label class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Seconds</label>
        <input
          type="number"
          v-model="seconds"
          min="0"
          max="59"
          class="time-input"
          @keydown.enter="startTimer"
        >
      </div>
    </div>

    <!-- Timer Display -->
    <div class="timer-display text-center mb-8">
      {{ formattedTime }}
    </div>

    <!-- Controls -->
    <div class="mt-auto">
      <div class="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
        <button
          @click="startTimer"
          :disabled="isRunning"
          class="start-button inline-flex items-center"
        >
          <PlayIcon class="w-5 h-5 mr-1" />
          Start
          <span class="text-sm opacity-75 ml-1">(Space)</span>
        </button>
        <button
          @click="pauseTimer"
          :disabled="!isRunning"
          class="pause-button inline-flex items-center"
        >
          <PauseIcon class="w-5 h-5 mr-1" />
          Pause
          <span class="text-sm opacity-75 ml-1">(P)</span>
        </button>
        <button
          @click="resumeTimer"
          :disabled="!isPaused"
          class="lap-button inline-flex items-center"
        >
          <PlayIcon class="w-5 h-5 mr-1" />
          Resume
          <span class="text-sm opacity-75 ml-1">(R)</span>
        </button>
        <button
          @click="resetTimer"
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
import { useRoute, useRouter } from 'vue-router'
import { PlayIcon, PauseIcon, ArrowPathIcon, LinkIcon } from '@heroicons/vue/24/solid'

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const time = ref(0)
const isRunning = ref(false)
const isPaused = ref(false)
let timerInterval = null

const route = useRoute()
const router = useRouter()

const formattedTime = computed(() => {
  const h = Math.floor(time.value / 3600)
  const m = Math.floor((time.value % 3600) / 60)
  const s = time.value % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
})

const updateTotalTime = () => {
  time.value = (Number(hours.value) * 3600) + (Number(minutes.value) * 60) + Number(seconds.value)
}

const startTimer = () => {
  updateTotalTime()
  if (time.value > 0) {
    isRunning.value = true
    isPaused.value = false
    timerInterval = setInterval(() => {
      if (time.value > 0) {
        time.value--
        saveTimerState()
      } else {
        clearInterval(timerInterval)
        isRunning.value = false
        // Play alarm sound
        playAlarmSound()
        // Show notification
        showNotification()
        // Vibrate device
        if (navigator.vibrate) {
          navigator.vibrate([200, 100, 200])
        }
      }
    }, 1000)
  }
}

const pauseTimer = () => {
  clearInterval(timerInterval)
  isRunning.value = false
  isPaused.value = true
  saveTimerState()
}

const resumeTimer = () => {
  if (isPaused.value) {
    isRunning.value = true
    isPaused.value = false
    startTimer()
  }
}

const resetTimer = () => {
  clearInterval(timerInterval)
  hours.value = 0
  minutes.value = 0
  seconds.value = 0
  time.value = 0
  isRunning.value = false
  isPaused.value = false
  saveTimerState()
}

const playAlarmSound = () => {
  const audio = new Audio('/sounds/alarm.mp3')
  audio.play().catch(error => {
    console.warn('Could not play alarm sound:', error)
  })
}

const showNotification = () => {
  if (Notification.permission === 'granted') {
    new Notification('Time is up!')
  }
}

const saveTimerState = () => {
  localStorage.setItem('countdown-timer', JSON.stringify({
    time: time.value,
    hours: hours.value,
    minutes: minutes.value,
    seconds: seconds.value,
    isRunning: isRunning.value,
    isPaused: isPaused.value
  }))
}

const loadTimerState = () => {
  const savedState = localStorage.getItem('countdown-timer')
  if (savedState) {
    const { time: savedTime, hours: savedHours, minutes: savedMinutes, 
            seconds: savedSeconds, isRunning: savedIsRunning, 
            isPaused: savedIsPaused } = JSON.parse(savedState)
    time.value = savedTime
    hours.value = savedHours
    minutes.value = savedMinutes
    seconds.value = savedSeconds
    isRunning.value = savedIsRunning
    isPaused.value = savedIsPaused
    if (isRunning.value) {
      startTimer()
    }
  }
}

const parseQueryParams = () => {
  const { h, m, s } = route.query
  if (h) hours.value = Number(h)
  if (m) minutes.value = Number(m)
  if (s) seconds.value = Number(s)
  updateTotalTime()
}

const copyShareLink = () => {
  const url = new URL(window.location.href)
  url.searchParams.set('h', hours.value)
  url.searchParams.set('m', minutes.value)
  url.searchParams.set('s', seconds.value)
  navigator.clipboard.writeText(url.toString())
}

const handleKeydown = (event) => {
  if (event.code === 'Space' && !isRunning.value) {
    event.preventDefault()
    startTimer()
  } else if (event.code === 'KeyP' && isRunning.value) {
    pauseTimer()
  } else if (event.code === 'KeyR' && isPaused.value) {
    resumeTimer()
  } else if (event.code === 'Escape') {
    resetTimer()
  }
}

onMounted(() => {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission()
  }
  parseQueryParams()
  loadTimerState()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  clearInterval(timerInterval)
})
</script>