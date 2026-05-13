import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  app: {
    head: {
      title: 'Undreamt',

      meta: [
        {
          name: 'description',
          content:
            'Building what has never been dreamt.'
        }
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/logo.svg'
        }
      ]
    }
  },

  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css'
  ],

  vite: {
    plugins: [tailwindcss()]
  }
})
