import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Login from '../components/Login';
import Board from '../components/Board';
import Card from '../components/Card';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

// (401에러가 떠서 토큰이 없다는 것을 알고 로그인페이지로 가지 않고)
// api를 호출하기 전에 로그인 여부를 확인 하여 토큰을 발급 받지 않았을 경우 
// 로그인페이지로 이동

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token');
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath);
};


const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/b/:bid',
    component: Board,
    beforeEnter: requireAuth,
    children: [{
      path: 'c/:cid',
      component: Card,
      beforeEnter: requireAuth
    }]
  },
  {
    path: '*',
    component: NotFound
  }
  ]
});

export default router;