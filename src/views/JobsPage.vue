<script setup>
import JobsSidebar from '@/components/JobsSidebar.vue'
import JobsList from '@/components/JobsList.vue'
</script>

<template>
  <div class="flex gap-10">
    <JobsSidebar />
    <JobsList class="flex-1" />
  </div>
</template>
