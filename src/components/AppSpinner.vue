<script setup>
defineProps({
  center: Boolean
})
</script>

<template>
  <div
    class="h-8 w-8 animate-spin rounded-full border-4 border-t-gray-400"
    :class="{ 'mx-auto': center }"
  ></div>
</template>
