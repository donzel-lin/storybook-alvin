import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
module.exports = {
  input: './index.js',
  // output: {
  //     file: 'dist/bundle.umd.js',
  //     format: 'umd',
  //     name: 'demo',
  //     exports: "named", // 输出多个文件
  //     globals: {
  //         vue: "Vue" // 告诉rollup全局变量Vue即是vue
  //     }
  // },
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'demo'
    }
  ],
  plugins: [ // 引入的插件在这里配置
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
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
