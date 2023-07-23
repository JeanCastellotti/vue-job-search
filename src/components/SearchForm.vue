<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import SearchFormInput from '@/components/SearchFormInput.vue'
import AppButton from '@/components/AppButton.vue'

const router = useRouter()

const role = ref('')
const location = ref('')

function handleSubmit() {
  router.push({
    name: 'jobs',
    query: { role: role.value, location: location.value }
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex items-end gap-10">
    <SearchFormInput v-model="role" label="role" />
    <SearchFormInput v-model="location" label="location" />
    <AppButton class="">Submit</AppButton>
  </form>
</template>
