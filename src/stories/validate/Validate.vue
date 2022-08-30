<template>
	<div class="">
		<al-form :model="form" :rules="rules" ref="form">
			<al-form-item prop="name">
				<al-input :value.sync="form.name" />
			</al-form-item>
			<div class="psd">
				<al-form-item prop="password">
					<al-input :value.sync="form.password" type="password" />
				</al-form-item>
			</div>
			<button @click="beforeSubmit">确定</button>
		</al-form>
	</div>
</template>
<script>
import AlForm from '../../../packages/al-form/al-form.vue'
import AlFormItem from '../../../packages/al-form-item/al-form-item.vue'
import AlInput from '../../../packages/al-input/al-input.vue'
import { isRequired, limitLength } from './validator'
export default {
  name: 'Validate',
  components: {
    AlForm,
    AlFormItem,
    AlInput
  },
  data () {
    return {
      msg: 'hello world',
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [isRequired, this.checkName],
        password: [limitLength(6, 12)]
      }
    }
  },
  methods: {
    async checkName (value) {
      if (!value) return
      return await new Promise(resolve => {
        setTimeout(() => {
          console.log(value, 'value')
          resolve({
            type: 'checkName',
            msg: '名字重复'
          })
        }, 2000)
      })
    },
    beforeSubmit () {
      // 如何校验？
      this.$refs.form.validate(validate => {
        console.log(validate, '校验的结果') // 成功还是失败
      })
    }
  }
}
</script>
