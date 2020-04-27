import Vue from "vue";
import VueRouter from "vue-router";

import { AuthorizationControl } from '../config/authControl';

import HomeComponent from "../components/pages/HomeComponent/HomeComponent";
import LoginComponent from "../components/pages/LoginComponent/LoginComponent";

Vue.use(VueRouter);

const routes = [
    { path: "/", name: "home", component: HomeComponent },
	{ path: "/home", name: "home", component: HomeComponent },
    { path: "/login", name: "login", component: LoginComponent }
];

const _router = new VueRouter({
	mode: "history",  // #'i urlden kaldırmak için
	routes
})

_router.beforeEach((to, from, next) => {

	debugger // eslint-disable-line

	if (to.name == "login") {
	  if ( AuthorizationControl("login", 2) == 1 ) 
	  {
	  	next();
	  }
	  else next({name: 'home'});
	}
	else next()
})

export const router = _router;

  