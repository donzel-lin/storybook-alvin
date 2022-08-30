import AlLink from './al-link.vue'

export default {
  title: 'AlLink',
  component: AlLink,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: {
    href: '',
    disabled: false
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AlLink },
  template: `
                <div>
                  <al-link v-bind="$props">aaaa</al-link>
                </div>
              `
})
export const Link = Template.bind({})
Link.args = {
  href: 'http://www.baidu.com',
  disabled: false
}
