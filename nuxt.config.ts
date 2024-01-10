export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxtjs/seo'
  ],
  css: ['~/assets/style.css'],
  site: {
    url: 'https://nezn.am',
    name: 'Ne znam',
    description: 'Small business offering some insights',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Ne znam',
      url: 'https://nezn.am',
      logo: 'https://nezn.am/logo.png'
    }
  }
})
