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
      { 
        text: 'Blogs', 
        target: '_blank',
        link: 'https://simonpangan-blogs.netlify.app/' 
      },
    ],
    sidebar: {
      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'My Portfolio v1', link: '/guide/' },
            { text: 'CharitAble', link: '/guide/one' },
            { text: 'Nimbus Weather Application', link: '/projects/nimbus-weather' },
            { text: 'Inflow', link: '/guide/two' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/simonpangan/' },
      { icon: 'github', link: 'https://github.com/simonpangan' },
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20">
          <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z" ></path>
          </svg>`,
        },
        link: "mailto:simonjoseph.pangan@gmail.com",
      },
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present | Simon Pangan'
    },
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
  ignoreDeadLinks: true,
  vite: {
    // assetsInclude: ['**/*.ttf'],
  }
})
