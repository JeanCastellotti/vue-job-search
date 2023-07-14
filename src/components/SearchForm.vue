<script>
import SearchFormInput from './SearchFormInput.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  components: {
    SearchFormInput,
    AppButton
  },
  data() {
    return {
      role: '',
      location: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        name: 'jobs',
        query: {
          role: this.role,
          location: this.location
        }
      })
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex items-end gap-10">
    <SearchFormInput v-model="role" label="role" />
    <SearchFormInput v-model="location" label="location" />
    <AppButton class="">Submit</AppButton>
  </form>
</template>
