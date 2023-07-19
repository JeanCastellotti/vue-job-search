<script setup>
import { ref } from 'vue'
import HeaderNavItem from './HeaderNavItem.vue'

const links = ref([
  { url: '/teams', label: 'Teams' },
  { url: '/locations', label: 'Locations' },
  { url: '/students', label: 'Students' },
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
