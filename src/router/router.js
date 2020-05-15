import Vue from "vue";
import Router from "vue-router";
import BlogDashboard from "../pages/BlogDashboard/BlogDashboard";
import BlogPosts from "../pages/dashboard/BlogPosts";
import AddBlog from "../pages/AddBlog/AddBlog";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import store from "../store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      redirect: "/blog"
    },
    {
      path: "/blog",
      name: "blog-dashboard",
      component: BlogDashboard,
      beforeEnter: ifAuthenticated
    },
    {
      path: "/post/:id",
      name: "blog-posts",
      component: BlogPosts
    },
    {
      path: "/addblog",
      name: "add-blog",
      component: AddBlog
    },
    {
      path: "/addblog/:id",
      name: "add-blog",
      component: AddBlog
    },

    //Auth Section
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
