import Router  from './index.vue'
export { Router }

export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./main'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./about'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('./contacts'),
  },
  {
    path: '/project/:id(\\d+)',
    name: 'project',
    props: true,
    component: () => import('./project'),

  },
];


