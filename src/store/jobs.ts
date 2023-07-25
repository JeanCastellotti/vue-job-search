import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getJobs from '@/api/getJobs'
import type { Job } from '@/api/types'

export const useJobsStore = defineStore('jobs', () => {
  const jobs = ref<Job[]>([])
  const selectedOrganizations = ref<string[]>([])
  const selectedJobTypes = ref<string[]>([])

  const jobTypes = computed(() => {
    return [...new Set(jobs.value.map((job) => job.jobType))].sort()
  })

  const degrees = computed(() => {
    return [...new Set(jobs.value.map((job) => job.degree))].sort()
  })

  const organizations = computed(() => {
    return [...new Set(jobs.value.map((job) => job.organization))].sort()
  })

  const filteredJobs = computed(() => {
    return jobs.value
      .filter((job) =>
        selectedOrganizations.value.length
          ? selectedOrganizations.value.includes(job.organization)
          : true
      )
      .filter((job) =>
        selectedJobTypes.value.length ? selectedJobTypes.value.includes(job.jobType) : true
      )
  })

  const jobsCount = computed(() => filteredJobs.value.length)

  async function fetchJobs() {
    jobs.value = await getJobs()
  }

  function addSelectedOrganizations(organizations: string[]) {
    selectedOrganizations.value = organizations
  }

  function addSelectedJobTypes(jobTypes: string[]) {
    selectedJobTypes.value = jobTypes
  }

  return {
    organizations,
    jobTypes,
    degrees,
    filteredJobs,
    jobsCount,
    addSelectedOrganizations,
    addSelectedJobTypes,
    fetchJobs
  }
})
