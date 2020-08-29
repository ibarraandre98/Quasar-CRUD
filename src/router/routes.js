const routes = [{
        path: '/',
        component: () =>
            import ('layouts/Login.vue'),
        children: [{
                path: '/',
                name: 'init',
                component: () =>
                    import ('pages/init.vue')
            },
            {
                path: 'login',
                name: 'login',
                component: () =>
                    import ('pages/Login.vue')
            },
        ]
    },
    {
        path: '/main',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            name: 'principal',
            component: () =>
                import ('pages/Index.vue')
        }]
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes