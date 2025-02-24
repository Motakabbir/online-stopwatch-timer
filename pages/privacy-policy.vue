<!-- Privacy Policy page -->
<template>
  <NuxtLayout name="content" :title="'Privacy Policy'">
    <div class="text-sm text-gray-500 dark:text-gray-400 mb-6">Last updated: {{ new Date().toISOString().split('T')[0] }}</div>
    
    <h2>Information Collection</h2>
    <p>Our Online Stopwatch & Timer application does not collect any personal information. The application runs entirely in your browser.</p>
    
    <h2>Usage Data</h2>
    <p>No usage data or analytics are collected when you use this application.</p>
    
    <h2>Cookies</h2>
    <p>This application only uses essential cookies to remember your preferences (such as dark mode setting) on your device. No tracking cookies are used.</p>
    
    <h2>Third-Party Services</h2>
    <p>We do not use any third-party services that collect data about our users.</p>
    
    <h2>Changes to This Policy</h2>
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
    
    <h2>Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us through our GitHub repository or social media channels.</p>

    <div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
      <p class="text-sm text-blue-600 dark:text-blue-300">
        💡 This privacy policy is designed to be transparent and user-friendly. We believe in protecting your privacy and providing a secure experience.
      </p>
    </div>
  </NuxtLayout>
</template>