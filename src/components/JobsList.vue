<script setup>
import JobsListItem from './JobsListItem.vue'
import AppSpinner from '@/components/AppSpinner.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useJobsStore } from '@/store/jobs'

const RESULTS_PER_PAGE = 10

const store = useJobsStore()
const route = useRoute()

// const jobs = ref([])
// const isLoading = ref(false)
// const error = ref(null)

onMounted(() => {
  store.fetchJobs()
})

// const page = +route.query.page || 1
// const from = (page - 1) * RESULTS_PER_PAGE
// const to = page * RESULTS_PER_PAGE

const jobs = computed(() => store.jobs)
const page = computed(() => +route.query.page || 1)
const pages = computed(() => Math.ceil(jobs.value.length / RESULTS_PER_PAGE))
const previousPage = computed(() => (page.value - 1 ? page.value - 1 : null))
const nextPage = computed(() => (page.value + 1 <= pages.value ? page.value + 1 : null))

const filteredJobs = computed(() => {
  const from = (page.value - 1) * RESULTS_PER_PAGE
  const to = page.value * RESULTS_PER_PAGE
  return jobs.value.slice(from, to)
})
</script>

<template>
  <div>
    <span v-if="error">{{ error }}</span>
    <AppSpinner v-else-if="isLoading" center />
    <template v-else>
      <ol class="space-y-5">
        <JobsListItem v-for="job in filteredJobs" :key="job.id" v-bind="job" />
      </ol>
      <div class="mt-10 flex items-center justify-between text-gray-700">
        <span>Page {{ page }}</span>
        <div class="space-x-5">
          <RouterLink v-if="previousPage" :to="`?page=${previousPage}`" class="text-emerald-500">
            Previous
          </RouterLink>
          <RouterLink v-if="nextPage" :to="`?page=${nextPage}`" class="text-emerald-500">
            Next
          </RouterLink>
        </div>
      </div>
    </template>
  </div>
</template>
