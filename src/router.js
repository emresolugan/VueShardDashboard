import BlogDashboard from '@/pages/BlogDashboard'
import BlogPosts from '@/pages/BlogPosts'
import LoginScreen from '@/pages/Login/LoginScreen'

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
        component: BlogPosts,
        props:true,
        meta:{
            fsd:'dfs'
        }
    },
    {
        path: '/login',
        name: "login",
        component: LoginScreen
    }
]

export default routes

