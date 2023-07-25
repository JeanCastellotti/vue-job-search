<script setup lang="ts">
import type { Job } from '@/api/types'
defineProps<Job>()
</script>

<template>
  <li>
    <RouterLink :to="`/jobs/${id}`" class="block overflow-hidden rounded bg-white shadow-sm">
      <div class="bg-emerald-500 p-8">
        <h2 class="mb-1 text-lg font-semibold text-emerald-50">
          {{ title }}
        </h2>

        <div class="flex gap-5 text-sm text-emerald-100">
          <span>{{ organization }}</span>
          <span>{{ locations.join(', ') }}</span>
          <span>{{ degree }}</span>
          <span>{{ jobType }}</span>
        </div>
      </div>

      <div class="space-y-10 p-8">
        <div class="space-y-3">
          <h3 class="font-medium">Description:</h3>
          <ul class="list-disc space-y-1 pl-5 text-gray-600">
            <li v-for="(text, index) in description" :key="index">
              {{ text }}
            </li>
          </ul>
        </div>

        <div class="space-y-3 text-gray-700">
          <h3 class="font-medium">Minimum qualifications:</h3>
          <ul class="list-disc space-y-1 pl-5 text-gray-600">
            <li v-for="(qualification, index) in minimumQualifications" :key="index">
              {{ qualification }}
            </li>
          </ul>
        </div>

        <div class="space-y-3 text-gray-700">
          <h3 class="font-medium">Prefered qualifications:</h3>
          <ul class="list-disc space-y-1 pl-5 text-gray-600">
            <li v-for="(qualification, index) in preferredQualifications" :key="index">
              {{ qualification }}
            </li>
          </ul>
        </div>
      </div>
    </RouterLink>
  </li>
</template>
