import { render, screen } from '@testing-library/vue'

import HeaderNav from '@/components/HeaderNav.vue'

describe('HeaderNav', () => {
  it('renders properly', () => {
    render(HeaderNav)
    const links = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(links).toEqual(['Teams', 'Locations', 'How we hire', 'Students', 'Jobs'])
  })
})
