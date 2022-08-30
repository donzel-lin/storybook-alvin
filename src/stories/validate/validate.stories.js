import Validate from './Validate.vue'

export default {
  title: 'validat-form',
  component: Validate,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
}

const Template = () => ({
  components: { Validate },
  template: '<validate />'
})

export const basic = Template.bind({})
