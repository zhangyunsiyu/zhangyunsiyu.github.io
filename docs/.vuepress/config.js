module.exports = {
  title: 'zhangyun\'s blog',
  description: '张赟的个人博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'manifest', href: '/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },  
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端总结', items: [
        { text: 'Vue笔记', link: '/frontEnd/Vue/' },
        { text: 'React笔记', link: '/frontEnd/React/' },
        { text: 'JavaScript笔记', link: '/frontEnd/JavaScript/' },
        { text: 'WEB基础', link: '/frontEnd/WEB/' },
      ]},
      {text: '小程序总结', items: [
        { text: '微信小程序', link: '/miniApp/wechatApp/' },
        { text: '支付宝小程序', link: '/miniApp/alipayApp/' }
      ]},
      {text: '服务端总结',items: [
        { text: 'NodeJs', link: '/serveEnd/NodeJs/' },
      ]},
      {text: '混合app',items:[
        { text: 'cordova', link: '/app/cordova/' },
      ]},
      {text: '感动常在',link: '/mySpace/',items:[
        { text: '读书笔记', link: '/mySpace/essay/' },
        { text: '摄影随笔', link: '/mySpace/photo/' },
      ]},
    ],
    sidebar:{
      // 前端总结 
      '/frontEnd/Vue/': [
        {
          title: 'Vue笔记',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ],
      '/frontEnd/React/': [
        {
          title: 'React笔记',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ],
      '/frontEnd/JavaScript/': [
        {
          title: 'JavaScript笔记',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ],
      '/frontEnd/WEB/': [
        {
          title: 'WEB基础',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ],
      // 小程序总结
      '/miniApp/wechatApp/': [
        {
          title: '微信小程序',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ],
      '/miniApp/alipayApp/': [
        {
          title: '支付宝小程序',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ],
      // 服务端总结
      '/serveEnd/NodeJs/': [
        {
          title: 'NodeJs',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ],
      // 混合app
      '/app/cordova/': [
        {
          title: 'cordova',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ],
      // 感动常在-读书笔记
      '/mySpace/essay/': [
        {
          title: '读书笔记',
          collapsable: false,
          children: [
            ['','写在前面'],
            'howToStudy',
          ]
        }
      ],
      '/mySpace/photo/': [
        {
          title: '摄影随笔',
          collapsable: false,
          children: [
            ['','写在前面'],
          ]
        }
      ]
    },
    // sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 4, // 侧边栏显示4级
  }
};