import { render, screen } from '@testing-library/vue'
import SearchFormInput from '@/components/SearchFormInput.vue'
import userEvent from '@testing-library/user-event'

describe('SearchFormInput', () => {
  it('should send user inputs', async () => {
    const { emitted } = render(SearchFormInput, {
      props: {
        modelValue: ''
      }
    })

    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'foo')
    const messages = emitted()['update:modelValue']
    expect(messages).toEqual([['f'], ['fo'], ['foo']])
  })
})
