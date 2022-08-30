<template>
	<div class="al-form-item">
		<slot />
		<p v-if="hasError" class="error-message">{{ errorMsg }}</p>
	</div>
</template>
<script>
export default {
  name: 'AlFormItem',
  props: {
    prop: {
      type: String,
      default: null
    }
  },
  provide () {
    return {
      AlFormItem: this
    }
  },
  data () {
    return {
      errorMessages: []
    }
  },
  computed: {
    hasError () {
      return !!this.errorMessages.length
    },
    errorMsg () {
      return this.hasError ? this.errorMessages[0] : null
    },
    form () {
      let parent = this.$parent
      let parentName = parent.$options.name
      while (parentName !== 'AlForm') {
        parent = parent.$parent
        parentName = parent.$options.name
      }
      return parent
    }
  },
  methods: {
    async validate () {
      this.errorMessages = []
      const value = this.form.model[this.prop]
      const rules = this.getRules()
      const requests = rules.map(validator => validator(value))
      const res = await Promise.all(requests)
      this.errorMessages = res.reduce((all, item) => {
        if (item && item.msg) {
          all.push(item.msg)
        }
        return all
      }, [])
      // 外层需要根据返回的结果来执行回调， 如果有error那么就是false
      return Promise.resolve(!this.errorMessages.length)
    },
    getRules () {
      let rules = []
      if (this.prop) {
        rules = this.form.rules[this.prop] || []
      }
      return rules
    }
  }
}
</script>
