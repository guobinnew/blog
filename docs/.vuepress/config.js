module.exports = {
  title: 'Orion', 
  description: '交互技术大本营',
  head: [
      ['link', { rel: 'icon', href: '/img/logo.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
  ],
  themeConfig: {
    nav: [
        { text: '首页', link: '/' },
        { text: '项目',
          items: [
            { text: 'Orion2', link: '/orion2/' },
            { text: 'Yuchang', link: '/yuchang/' },
            { text: 'Guardian', link: '/guardian/' },
            { text: 'Buddha2', link: '/buddha2/' }
          ] 
        },
        { text: '关于', link: '/about/' },
        { text: 'Github', link: 'https://github.com/guobinnew' },
    ],
    sidebar: {
      "/yuchang/":[
        '/yuchang/',
        {
          title: 'Block',
          collapsable: true,
          children: [
            '/yuchang/block-category',
            '/yuchang/block-type',
            '/yuchang/block-define',
            '/yuchang/block-extend'
          ]
        },
      ],
      "/orion2/":[
        '/orion2/',
        {
          title: 'Demo',
          collapsable: true,
          children: [
            '/orion2/demo-space',
            '/orion2/demo-cat'
          ]
        },
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
  },
  serviceWorker: true,
  markdown: {
    lineNumbers: true, // 代码块显示行号
		anchor: {
			permalink: true
		},
		toc: {
			includeLevel: [1, 2]
		},
		config: md => {
			// 使用更多 markdown-it 插件！
			md.use(require('markdown-it-task-lists'))
			.use(require('markdown-it-imsize'), { autofill: true })
		}
	},
	postcss: {
		plugins: [require('autoprefixer')]
	},
}