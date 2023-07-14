import userEvent from '@testing-library/user-event'
import SearchForm from '@/components/SearchForm.vue'
import { render, screen } from '@testing-library/vue'

describe('SearchForm', () => {
  describe('when user submits form', () => {
    it('should redirect user to jobs page', async () => {
      const push = vi.fn()
      const $router = { push }
      render(SearchForm, {
        global: {
          mocks: { $router }
        }
      })
      const roleInput = screen.getByRole('textbox', { name: /role/i })
      const roleLocation = screen.getByRole('textbox', { name: /location/i })
      const submitButton = screen.getByRole('button', { name: /submit/i })

      await userEvent.type(roleInput, 'Vue Developer')
      await userEvent.type(roleLocation, 'Paris')
      await userEvent.click(submitButton)

      expect(push).toHaveBeenCalledWith({ name: 'jobs', query: { role: 'Vue Developer', location: 'Paris' } })
    })
  })
})
