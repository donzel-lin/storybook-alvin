import { mount } from '@vue/test-utils'
import AlInput from '../al-input'

describe('al-form-item', () => {
  test('input-text', () => {
    const wrapper = mount(AlInput)
    expect(wrapper.html()).toContain('input type="text"')
  })
})
