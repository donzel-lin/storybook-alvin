#### 需要搭配 al-form-item, al-input使用
```vue
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
```
#### 校验
```javascript
// validator.js里面定义了一些校验规则
import { isRequired, limitLength } from './validator';
export default {
    data() {
        return {
            // model传递给al-form使用
            form: {
                name: '',
                password: '',
            },
            rules: {// 表单里面各字段的校验规则
                name: [isRequired, this.checkName],
                // 可以是封装好的方法，也可以是自定义的异步校验规则
                // 注意返回结果的结构
                /*
                   {
                        type: 'checkName', // type为校验的名称
                        msg: '名字重复',
                         // msg为提示信息，如果校验通过，msg为null,
                         // 后续也是根据msg的值来判断是否校验通过
                    }
                    
                */
                password: [limitLength(6, 12)],
            },
        };
    },
    methods: {
        // 模拟 异步校验
        async checkName(value) {
            if (!value) return;
            return await new Promise(resolve => {
                setTimeout(() => {
                    console.log(value, 'value');
                    resolve({
                        type: 'checkName',
                        msg: '名字重复',
                    });
                }, 2000);
            });
        },
        beforeSubmit() {
            // 如何校验？
            this.$refs.form.validate(validate => {
                console.log(validate, '校验的结果'); // 成功还是失败
            });
        },
    },
}
```
