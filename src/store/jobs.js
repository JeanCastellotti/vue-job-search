import { defineStore } from 'pinia'
import { ref } from 'vue'
import getJobs from '../api/getJobs'

export const useJobsStore = defineStore('jobs', () => {
  const jobs = ref([])

  async function fetchJobs() {
    jobs.value = await getJobs()
  }

  return { jobs, fetchJobs }
})
