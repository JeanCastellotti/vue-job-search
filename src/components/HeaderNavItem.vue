<script setup>
defineProps({
  url: {
    type: String,
    default: '#'
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li>
    <a
      :href="url"
      class="inline-block border-b-2 border-transparent p-4 transition hover:border-b-emerald-500 hover:bg-emerald-50 hover:text-emerald-500"
    >
      {{ label }}
    </a>
  </li>
</template>
