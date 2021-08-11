import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = (name) => {
    return () => import(`@/views/${name}`)
}
const Layout = (name) => {
    return () => import(`@/layouts/${name}`)
}

const routes = [
    // {
    //   path: '/',
    //   component: Layout('Home.vue'),
    //   children: [
    //     {
    //       path: '',
    //       component: View('Home.vue')
    //     },
    //   ]
    // },
    // {
    //   path: '/',
    //   component: Layout('Default.vue'),
    //   children: [
    //
    //   ]
    // },
    {
        path: '',
        component: Layout('Swap.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: View('Home.vue')
            },
            {
                path: '/swap',
                component: View('Swap.vue')
            },
            {
                path: '/farm',
                component: View('Farm.vue')
            },
            {
                path: '/stake',
                component: View('Stake.vue')
            },
            {
                path: '/currency',
                component: View('Currency.vue')
            },
            {
                path: '/lotto',
                component: View('Lottery.vue')
            },
            {
                path: '/results',
                name:'result',
                component: View('results.vue')
            },
            {
                path: '/faq',
                component: View('faq.vue')
            }
        ]
    },
    {
        path: '*',
        component: Layout('Error.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
