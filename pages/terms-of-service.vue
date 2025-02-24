<!-- Terms of Service page -->
<template>
  <NuxtLayout name="content" :title="'Terms of Service'">
    <div class="text-sm text-gray-500 dark:text-gray-400 mb-6">Last updated: {{ new Date().toISOString().split('T')[0] }}</div>

    <h2>Agreement to Terms</h2>
    <p>By accessing and using this Online Stopwatch & Timer application, you agree to these Terms of Service.</p>

    <h2>Use License</h2>
    <div class="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 my-4">
      <p class="mb-4">This application is provided free of charge for personal and commercial use. You may not:</p>
      <ul class="space-y-2">
        <li class="flex items-start">
          <span class="text-red-500 mr-2">•</span>
          <span>Modify or copy the materials</span>
        </li>
        <li class="flex items-start">
          <span class="text-red-500 mr-2">•</span>
          <span>Attempt to decompile or reverse engineer any software contained in the application</span>
        </li>
        <li class="flex items-start">
          <span class="text-red-500 mr-2">•</span>
          <span>Remove any copyright or other proprietary notations</span>
        </li>
        <li class="flex items-start">
          <span class="text-red-500 mr-2">•</span>
          <span>Transfer the materials to another person or 'mirror' the materials on any other server</span>
        </li>
      </ul>
    </div>

    <h2>Disclaimer</h2>
    <p>The materials on our application are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

    <h2>Limitations</h2>
    <div class="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-6 my-4">
      <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our application.</p>
    </div>

    <h2>Accuracy of Materials</h2>
    <p>The materials appearing on our application could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our application are accurate, complete, or current.</p>

    <h2>Links</h2>
    <p>We have not reviewed all of the sites linked to our application and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.</p>

    <h2>Modifications</h2>
    <p>We may revise these terms of service at any time without notice. By using this application you are agreeing to be bound by the then current version of these terms of service.</p>

    <div class="mt-8 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
      <p class="text-sm text-green-600 dark:text-green-300">
        ✨ Thank you for reading our Terms of Service. We aim to provide a reliable and user-friendly service while protecting both our users and our application.
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Terms of Service - Online Stopwatch & Timer',
  meta: [
    {
      name: 'description',
      content: 'Read our terms of service for using the online stopwatch and timer application. Understand the usage terms, conditions, and guidelines for our time tracking tools.'
    },
    {
      name: 'keywords',
      content: 'terms of service, usage terms, conditions, service agreement, online timer terms'
    }
  ]
})
</script>