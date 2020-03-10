import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';
import Login from '../components/Login';
import Board from '../components/Board';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board }, // :bid는 변수(route의 bid를 가져오면 해당 id를 얻을 수 있음)
    { path: '*', component: NotFound }
  ]
});

export default router;
