import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SimonPangan",
  description: "Simon Pangan portfolio",
  themeConfig: {
    siteTitle: "Simon Pangan",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about' },
      {
        text: 'Contents',
        items: [
          { text: 'Blogs', link: '/blogs' },
          { text: 'Projects', link: '/projects' },  
          { text: 'Articles', link: '/articles' },
        ]
      },
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/simonpangan/' },
      { icon: 'github', link: 'https://github.com/simonpangan' },
    ]
  },
  // head: [
    // ['link', { rel: 'icon', href: '/assets/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }],
    // ['link', { rel: 'icon', href: '/assets/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
  // ],
})
