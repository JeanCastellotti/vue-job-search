<script setup lang="ts">
import IconMagnifyingGlass from '@/components/icons/IconMagnifyingGlass.vue'
import { useJobsStore } from '@/store/jobs'

const store = useJobsStore()
</script>

<template>
  <div class="flex items-center gap-3 border-b px-8 py-3">
    <IconMagnifyingGlass class="text-emerald-500" />
    <span class="text-gray-600">{{ store.jobsCount }} jobs found</span>
  </div>
</template>
