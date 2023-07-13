<script setup>
import { ref } from 'vue'
import SearchFormInput from './SearchFormInput.vue'

const role = ref('')
const location = ref('')
</script>

<template>
  <form class="flex gap-10">
    <SearchFormInput v-model="role" label="role" />
    <SearchFormInput v-model="location" label="location" />
  </form>
</template>
