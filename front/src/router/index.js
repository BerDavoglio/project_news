import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/Public/HomeView.vue';
import DailyViewList from '../views/Public/DailyView/DailyViewList.vue';
import WeeklyViewList from '../views/Public/WeeklyView/WeeklyViewList.vue';
import MonthlyViewList from '../views/Public/MonthlyView/MonthlyViewList.vue';
import GlobalViewList from '../views/Public/GlobalView/GlobalViewList.vue';

import SearchView from '../views/Public/SearchView.vue';
import NewsPageView from '../views/Public/NewsPageView.vue';

import LoginView from '../views/Admin/LoginView.vue';
import HomeAdmView from '../views/Admin/HomeAdmView.vue';
import EditAdmView from '../views/Admin/EditAdmView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/daily/',
      name: 'daily',
      component: DailyViewList,
    },
    {
      path: '/weekly/',
      name: 'weekly',
      component: WeeklyViewList,
    },
    {
      path: '/monthly/',
      name: 'monthly',
      component: MonthlyViewList,
    },
    {
      path: '/global/',
      name: 'global',
      component: GlobalViewList,
    },
    {
      path: '/s/:id',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/n/:id',
      name: 'news',
      component: NewsPageView,
    },
    {
      path: '/adm/login/',
      name: 'adm-login',
      component: LoginView,
    },
    {
      path: '/adm/',
      name: 'adm-home',
      component: HomeAdmView,
    },
    {
      path: '/adm/edit/:id',
      name: 'adm-edit',
      component: EditAdmView,
    },
  ],
});

export default router;
