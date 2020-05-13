import Vue from "vue";
import Router from "vue-router";
import store from "../store";

import BlogDashboard from "../pages/BlogDashboard/BlogDashboard";
import BlogPosts from "../pages/dashboard/BlogPosts";
import AddBlog from "../pages/AddBlog/AddBlog";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Error_404 from "../components/errors/404";
import Error_500 from "../components/errors/500";

Vue.use(Router);

// eslint-disable-next-line no-unused-vars
const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

// eslint-disable-next-line no-unused-vars
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
      component: BlogDashboard
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
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },

    //Error Section
    {
      path: "error/404",
      name: "error-404",
      component: Error_404
    },
    {
      path: "error/500",
      name: "error-500",
      component: Error_500
    }
  ]
});
