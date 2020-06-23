import Vue from 'vue';
import Router from 'vue-router';

import loginPage from '@/components/loginPage';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'loginPage',
            component: loginPage
        }
    ]
})

export default router;