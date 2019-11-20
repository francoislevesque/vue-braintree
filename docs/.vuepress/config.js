module.exports = {
  base: 'vue-braintree',
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VueBraintree',
      description: 'VueBraintree for Vue.js'
    }
  },
  themeConfig: {
    repo: 'francoislevesque/vue-braintree',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com/francoislevesque/vue-braintree/releases'
        }],
        sidebar: [
          '/installation.md',
          '/started.md',
          '/configuration.md',
          '/events.md',
        ]
      }
    }
  }
}
