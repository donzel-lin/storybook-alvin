<template>
	<div>
		<input
			v-bind="$attrs"
			@input="handleInput"
			@change="handleChange"
			@blur="handleBlur"
		/>
	</div>
</template>
<script>
export default {
  name: 'AlInput',
  methods: {
    findParent () {
      let parent = this.$parent
      let parentName = parent.$options.name
      while (parentName !== 'AlFormItem') {
        parent = parent.$parent
        if (!parent) {
          break
        } else {
          parentName = parent.$options.name
        }
      }
      return parent
    },
    validate (evt) {
      const formItem = this.findParent()
      formItem && formItem.validate(evt.target.value)
    },
    handleInput (evt) {
      this.$emit('update:value', evt.target.value)
      this.$emit('input', evt.target.value)
      this.validate(evt)
    },
    handleChange (evt) {
      this.$emit('update:value', evt.target.value)
      this.$emit('change', evt.target.value)
      this.validate(evt)
    },
    handleBlur (evt) {
      this.$emit('update:value', evt.target.value)
      this.$emit('blur', evt.target.value)
      this.validate(evt)
    }
  }
}
</script>
