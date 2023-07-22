export default [
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录', path: '/user/login', component: './user/Login', layout: false}],
  },
  {path: '/home', name: '主页', icon: 'smile', component: './Home'},
  {
    name: 'Demo',
    path: '/demo',
    icon: 'smile',
    routes: [{name: 'demo1', path: '/demo/demo1', component: './demo/Demo1'}],
  },
  {
    path: '/blog',
    name: '文章',
    icon: 'crown',
    routes: [
      {path: '/blog/posts', name: '文章列表', component: './blog/PostList'}
    ]
  },
  {
    path: '/photo',
    name: '照片',
    icon: 'crown',
    routes: [
      {path: '/photo/list', name: '照片列表', component: './photo/PhotoList'}
    ]
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {path: '/admin', redirect: '/admin/sub-page'},
      {path: '/admin/sub-page', name: '二级管理页', component: './Admin'},
    ],
  },

  {path: '/', redirect: '/home'},
  {path: '*', layout: false, component: './404'},
];
