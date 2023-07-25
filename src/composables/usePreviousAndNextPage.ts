import { type ComputedRef, computed } from 'vue'

export function usePreviousAndNextPage(
  currentPage: ComputedRef<number>,
  maxPages: ComputedRef<number>
) {
  const previousPage = computed(() => {
    return currentPage.value - 1 ? currentPage.value - 1 : null
  })

  const nextPage = computed(() => {
    return currentPage.value + 1 <= maxPages.value ? currentPage.value + 1 : null
  })

  return {
    previousPage,
    nextPage
  }
}
