import BlogDashboard from '@/pages/dashboard/BlogDashboard'
import BlogPosts from '@/pages/dashboard/BlogPosts'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Error_404 from '@/pages/errors/404'
import Error_500 from '@/pages/errors/500'

const routes = [
    {
        path: '/',
        name: 'main',
        redirect: '/blog'
    },
    {
        path: '/blog',
        name: 'blog-dashboard',
        component: BlogDashboard
    },
    {
        path: '/post/:id',
        name: 'blog-posts',
        component: BlogPosts
    },

    //Auth Section
    {
        path: '/login',
        name: "login",
        component: Login
    },
    {
        path: '/register',
        name: "register",
        component: Register
    },

    //Error Section
    {
        path: 'error/404',
        name: "error-404",
        component: Error_404
    },
    {
        path: 'error/500',
        name: "error-500",
        component: Error_500
    },
]

export default routes

