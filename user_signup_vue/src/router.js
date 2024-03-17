// router.js

import { createRouter, createWebHistory } from 'vue-router';
import UserList from '@/components/UserList.vue';
import SignUp from '@/components/SignUp.vue';
import LandingPage from "@/components/LandingPage.vue";
import UserDetails from "@/components/UserDetails.vue";
import UserEdit from "@/components/UserEdit.vue";

const routes = [
    {
        path: '/',
        component: LandingPage,
        name: 'LandingPage',
    },
    {
        path: '/user-list',
        component: UserList,
        name: 'UserList',
    },
    {
        path: '/user/:id',
        component: UserDetails,
        name: 'UserDetails',
    },
    {
        path: '/user/edit/:id',
        component: UserEdit,
        name: 'UserEdit',
    },
    {
        path: '/signup',
        component: SignUp,
        name: 'SignUp',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
