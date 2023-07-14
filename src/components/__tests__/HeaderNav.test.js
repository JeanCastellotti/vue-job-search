import { render, screen } from '@testing-library/vue'

import HeaderNav from '@/components/HeaderNav.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('HeaderNav', () => {
  it('renders properly', () => {
    render(HeaderNav, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const links = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(links).toEqual(['Teams', 'Locations', 'How we hire', 'Students', 'Jobs'])
  })
})
