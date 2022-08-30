
module.exports = plop => {
  // create your generators here
  plop.setGenerator('basics', {
    description: 'generate a package by templates',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please input package name'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'packages/al-{{name}}/al-{{name}}.vue',
        templateFile: 'plop-templates/template.vue.hbs'
      },
      {
        type: 'add',
        path: 'packages/al-{{name}}/index.js',
        templateFile: 'plop-templates/index.hbs'
      },
      {
        type: 'add',
        path: 'packages/al-{{name}}/LICENSE',
        templateFile: 'plop-templates/LICENSE'
      },
      {
        type: 'add',
        path: 'packages/al-{{name}}/package.json',
        templateFile: 'plop-templates/package.json.hbs'
      },
      {
        type: 'add',
        path: 'packages/al-{{name}}/{{name}}.stories.js',
        templateFile: 'plop-templates/component.stories.js.hbs'
      },
      {
        type: 'add',
        path: 'packages/al-{{name}}/__tests__/{{name}}.test.js',
        templateFile: 'plop-templates/__tests__/component.test.js.hbs'
      },
      {
        type: 'add',
        path: 'packages/al-{{name}}/rollup.config.js',
        templateFile: 'plop-templates/rollup.config.js'
      }
    ] // array of actions
  })
}
