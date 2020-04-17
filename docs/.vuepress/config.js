module.exports = {
  title: 'zhangyun\'s blog',
  description: '张赟的个人博客',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端总结', items: [
        { text: 'Vue笔记', link: '/frontEnd/Vue/' },
        // { text: 'React笔记', link: '/frontEnd/React/' },
        { text: 'JavaScript笔记', link: '/frontEnd/JavaScript/' },
        { text: 'HTML笔记', link: '/frontEnd/HTML/' },
        { text: 'CSS笔记', link: '/frontEnd/CSS/' },
      ]},
      // {text: '服务端总结', link: '/serveEnd/',item: [
      //   { text: 'NodeJs', link: '/serveEnd/NodeJs/' },
      // ]},
      // {text: '混合app', link: '/app/',item:[
      //   { text: 'cordova', link: '/app/cordova/' },
      // ]}
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3, // 侧边栏显示2级
  }
};