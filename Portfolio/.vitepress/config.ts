import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: "Simon Pangan",
  description: "Simon Pangan portfolio",
  themeConfig: {
    siteTitle: "Simon.",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Blogs', link: '/blogs' },
    ],
    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'My Portfolio v1', link: '/guide/' },
            { text: 'CharitAble', link: '/guide/one' },
            { text: 'Nimbus Weather Application', link: '/guide/two' },
            { text: 'Inflow', link: '/guide/two' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/simonpangan/' },
      { icon: 'github', link: 'https://github.com/simonpangan' },
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Simon Pangan'
    }
  },
  transformHead({ assets }) {
    const myFontFile = assets.find(file => /\w+\.ttf/)
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/ttf',
            crossorigin: ''
          }
        ]
      ]
    }
  },
  // head: [
    // ['link', { rel: 'icon', href: '/assets/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }],
    // ['li nk', { rel: 'icon', href: '/assets/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
  // ],
  ignoreDeadLinks: true
})
