import Vue from 'vue';
import Router from 'vue-router';

import loginPage from '@/components/loginPage';
import Table from '@/components/Table';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'loginPage',
            component: loginPage
        },
        {
            path: '/table',
            name: 'Table',
            component: Table
        }
    ]
})

export default router;