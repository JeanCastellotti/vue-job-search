<script setup lang="ts">
interface Props {
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'base' | 'small'
}

withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'base'
})
</script>

<template>
  <button class="rounded transition" :class="[type, size]">
    <slot />
  </button>
</template>

<style scoped>
.primary {
  @apply bg-emerald-500 text-emerald-100 hover:bg-emerald-400;
}

.secondary {
  @apply border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-emerald-100;
}

.danger {
  @apply bg-red-500 text-red-100 hover:bg-red-400;
}

.base {
  @apply px-4 py-2;
}

.small {
  @apply px-3 py-2 text-sm;
}
</style>
