<script setup lang="ts">
import { ref } from 'vue'

import HeaderNavItem from '@/components/HeaderNavItem.vue'

const links = ref([
  { url: '/', label: 'Home' },
  { url: '/jobs', label: 'Jobs' }
])
</script>

<template>
  <nav>
    <ul class="flex text-sm text-gray-500">
      <HeaderNavItem v-for="(link, index) in links" :key="index" v-bind="link" />
    </ul>
  </nav>
</template>
