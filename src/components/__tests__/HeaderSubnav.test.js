import { render, screen } from '@testing-library/vue'

import HeaderSubnav from '@/components/HeaderSubnav.vue'

describe('HeaderSubnav', () => {
  describe('when user is on jobs page', () => {
    it('renders properly', () => {
      render(HeaderSubnav, {
        // global: {
        //   stubs: {
        //     IconGlass: true
        //   }
        // },
        data() {
          return {
            onJobsPage: true
          }
        }
      })
      const jobsCount = screen.getByText('461 jobs found')
      expect(jobsCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('renders properly', () => {
      render(HeaderSubnav)
    })
  })
})
