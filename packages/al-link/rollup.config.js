import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import image from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
module.exports = {
  input: './index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    }
  ],
  plugins: [ // 引入的插件在这里配置
    terser(),
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    // es6问题
    babel({
      exclude: '**/node_modules/**'
    }),
    commonjs(),
    image(),
    postcss({
      extract: true
    })
  ]
}
