<script setup>
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <TheHeader />
    <main class="container mx-auto">
      <RouterView />
    </main>
  </div>
</template>
