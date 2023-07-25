import type { Job } from './types'

async function getJobs(): Promise<Job[]> {
  const res = await fetch(import.meta.env.VITE_API_URL)
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}

export default getJobs
