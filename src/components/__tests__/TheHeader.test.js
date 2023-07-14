import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import TheHeader from '@/components/TheHeader.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('TheHeader', () => {
  describe('when user logs in', () => {
    it('should display user avatar', async () => {
      const $route = { name: '/' }
      render(TheHeader, {
        global: {
          mocks: { $route },
          stubs: { RouterLink: RouterLinkStub }
        },
        data: () => ({
          isLoggedIn: false
        })
      })
      let img = screen.queryByRole('img', { name: /avatar/i })
      expect(img).not.toBeInTheDocument()
      const loginButton = screen.getByRole('button', { name: /sign in/i })
      await userEvent.click(loginButton)
      img = screen.queryByRole('img', { name: /avatar/i })
      expect(img).toBeInTheDocument()
    })
  })

  describe('when user logs out', () => {
    it('should hide user avatar', async () => {
      const $route = { name: '/' }
      render(TheHeader, {
        global: {
          mocks: { $route },
          stubs: { RouterLink: RouterLinkStub }
        },
        data: () => ({
          isLoggedIn: true
        })
      })

      let img = screen.queryByRole('img', { name: /avatar/i })
      expect(img).toBeInTheDocument()
      const logoutButton = screen.queryByRole('button', { name: /logout/i })
      await userEvent.click(logoutButton)
      img = screen.queryByRole('img', { name: /avatar/i })
      expect(img).not.toBeInTheDocument()
    })
  })

  describe('when user is on jobs page', () => {
    it('should render the subnav', () => {
      const $route = { name: 'jobs' }
      render(TheHeader, {
        global: {
          mocks: { $route },
          stubs: { RouterLink: RouterLinkStub }
        }
      })
      const jobsCount = screen.getByText('461 jobs found')
      expect(jobsCount).toBeInTheDocument()
    })
  })

  describe('when user is not on jobs page', () => {
    it('should not render the subnav', () => {
      const $route = { name: 'home' }
      render(TheHeader, {
        global: {
          mocks: { $route },
          stubs: { RouterLink: RouterLinkStub }
        }
      })
      const jobsCount = screen.queryByText('461 jobs found')
      expect(jobsCount).not.toBeInTheDocument()
    })
  })
})
