<script setup lang="ts">
defineProps<{
  url: string
  label: string
}>()
</script>

<template>
  <li>
    <RouterLink
      :to="url"
      class="inline-block border-b-2 border-transparent p-4 transition hover:border-b-emerald-500 hover:bg-emerald-50 hover:text-emerald-500"
      active-class="border-b-emerald-500 bg-emerald-50 text-emerald-500"
    >
      {{ label }}
    </RouterLink>
  </li>
</template>
