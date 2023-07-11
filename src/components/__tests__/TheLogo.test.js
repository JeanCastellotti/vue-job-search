// import { mount } from '@vue/test-utils'
// import TheLogo from '@/components/TheLogo.vue'

// describe('TheLogo', () => {
//   it('renders properly', () => {
//     const wrapper = mount(TheLogo)
//     expect(wrapper.text()).toContain('Vue Careers')
//   })
// })

// import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import TheLogo from '@/components/TheLogo.vue'

describe('TheLogo', () => {
  it('renders properly', () => {
    render(TheLogo)
    const name = screen.getByText('Vue Careers')
    expect(name).toBeInTheDocument()
  })
})
