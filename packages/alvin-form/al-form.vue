<template>
	<div class="al-form">
		<slot />
	</div>
</template>
<script>
export default {
  name: 'AlForm',
  props: ['model', 'rules'],
  provide () {
    return {
      AlFrom: this
    }
  },
  methods: {
    async validate (cb) {
      // 校验
      const request = this.$children
        .filter(x => x.prop)
        .map(child => child.validate())
      const result = await Promise.all(request)
      const isValidate = result.every(x => !!x)
      cb(isValidate)
    }
  }
}
</script>
