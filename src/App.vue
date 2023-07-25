<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 pb-10">
    <TheHeader />
    <main class="container mx-auto">
      <RouterView />
    </main>
  </div>
</template>
