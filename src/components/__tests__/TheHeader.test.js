import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import TheHeader from '@/components/TheHeader.vue'

describe('TheHeader', () => {
  describe('when user logs in', () => {
    it('displays user avatar', async () => {
      render(TheHeader)
      let img = screen.queryByRole('img', { name: /avatar/i })
      expect(img).not.toBeInTheDocument()
      const loginButton = screen.getByRole('button', { name: /sign in/i })
      await userEvent.click(loginButton)
      img = screen.queryByRole('img', { name: /avatar/i })
      expect(img).toBeInTheDocument()
    })
  })

  describe('when user logs out', () => {
    it('hides user avatar', async () => {
      render(TheHeader, {
        data() {
          return {
            isLoggedIn: true
          }
        }
      })

      let img = screen.queryByRole('img', { name: /avatar/i })
      expect(img).toBeInTheDocument()
      const logoutButton = screen.queryByRole('button', { name: /logout/i })
      await userEvent.click(logoutButton)
      img = screen.queryByRole('img', { name: /avatar/i })
      expect(img).not.toBeInTheDocument()
    })
  })
})
