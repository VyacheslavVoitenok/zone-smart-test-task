import Vue from 'vue';
import Router from 'vue-router';
import store from '../store'

import loginPage from '@/components/loginPage';
import Table from '@/components/Table';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'loginPage',
            component: loginPage
        },
        {
            path: '/table',
            name: 'Table',
            component: Table,
            meta: { 
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['auth/isLoggedIn']) {
            return next()
        }
        next('/') 
    } else {
        next() 
    }
})

export default router;