import AppButton from '@/components/AppButton.vue'
import { render, screen } from '@testing-library/vue'

describe('AppButton', () => {
  it('renders properly', () => {
    render(AppButton, { props: { type: 'primary' }, slots: { default: 'click' } })
    const button = screen.queryByRole('button', { name: /click/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('primary')
  })
})
