<script setup lang="ts">
import { ref } from 'vue'

import IconChevronDown from './icons/IconChevronDown.vue'
import IconChevronUp from './icons/IconChevronUp.vue'

defineProps<{
  title: string
}>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <section class="overflow-hidden rounded border text-sm">
    <header
      @click="toggle"
      class="flex cursor-pointer items-center justify-between bg-gray-50 p-4 font-semibold text-gray-700"
    >
      <span>{{ title }}</span>
      <component :is="isOpen ? IconChevronUp : IconChevronDown" />
    </header>
    <div v-show="isOpen" class="space-y-5 bg-white p-4 text-gray-600">
      <slot />
    </div>
  </section>
</template>
