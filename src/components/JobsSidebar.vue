<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import AppButton from '@/components/AppButton.vue'
import JobsSidebarDropdown from '@/components/JobsSidebarDropdown.vue'

import { useJobsStore } from '../store/jobs'

const router = useRouter()

const store = useJobsStore()

const selectedOrganizations = ref<string[]>([])

function handleSelectOrganization() {
  store.addSelectedOrganizations(selectedOrganizations.value)
  router.push({ name: 'jobs' })
}

const selectedJobTypes = ref([])

function handleSelectJobType() {
  store.addSelectedJobTypes(selectedJobTypes.value)
  router.push({ name: 'jobs' })
}
</script>

<template>
  <aside class="w-max space-y-5">
    <section class="flex items-center gap-5 overflow-hidden rounded bg-white p-4">
      <span class="shrink-0 text-sm font-semibold text-gray-700">What do you want to do?</span>
      <AppButton size="small">Clear filters</AppButton>
    </section>

    <JobsSidebarDropdown v-if="store.organizations.length" title="Organizations">
      <div
        v-for="(organization, index) in store.organizations"
        :key="index"
        class="flex items-center gap-2"
      >
        <input
          :id="organization"
          :value="organization"
          v-model="selectedOrganizations"
          @change="handleSelectOrganization"
          class="relative -top-px accent-emerald-300"
          type="checkbox"
        />
        <label :for="organization">{{ organization }}</label>
      </div>
    </JobsSidebarDropdown>

    <JobsSidebarDropdown v-if="store.jobTypes.length" title="Job types">
      <div v-for="(jobType, index) in store.jobTypes" :key="index" class="flex items-center gap-2">
        <input
          :id="jobType"
          :value="jobType"
          v-model="selectedJobTypes"
          @change="handleSelectJobType"
          class="relative -top-px accent-emerald-300"
          type="checkbox"
        />
        <label :for="jobType">{{ jobType }}</label>
      </div>
    </JobsSidebarDropdown>
  </aside>
</template>
