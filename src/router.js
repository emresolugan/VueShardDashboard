import BlogDashboard from '@/pages/BlogDashboard/BlogDashboard'
import BlogPosts from '@/pages/BlogPosts'
import AddBlog from '@/pages/AddBlog/AddBlog'
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
        path: '/addblog',
        name: 'add-blog',
        component: AddBlog
    },
    {
        path: '/addblog/:id',
        name: 'add-blog',
        component: AddBlog
    },
    {
        path: '/login',
        name: "login",
        component: LoginScreen
    }
]

export default routes

