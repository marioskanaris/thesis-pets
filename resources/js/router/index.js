import Vue from "vue";
import VueRouter from "vue-router";

import Login from "@/Login";
import Register from "@/Register";
import RegisterShelter from "@/RegisterShelter";
import Home from "Views/visitor/Home";
import About from "Views/visitor/About";
import Contact from "Views/visitor/Contact";
import Post from "Views/visitor/Post";
import Blog from "Views/visitor/Blog";
import BlogsCategory from "Views/visitor/BlogsCategory";
import AnimalShelterCategory from "Views/visitor/AnimalShelterCategory";
import AnimalShelter from "Views/visitor/AnimalShelter";
import AdoptionCategory from "Views/visitor/AdoptionCategory";
import Adoption from "Views/visitor/Adoption";
import LostPetCategory from "Views/visitor/LostPetCategory";
import LostPet from "Views/visitor/LostPet";
import LostPetOwnerCategory from "Views/visitor/LostPetOwnerCategory";
import LostPetOwner from "Views/visitor/LostPetOwner";
import adminRoutes from "./admin";

import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        title: "Home",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/about",
      component: About,
      meta: {
        title: "About",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/contact",
      component: Contact,
      meta: {
        title: "Contact",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/blogs/:blog/posts/:post",
      component: Post,
      meta: {
        title: "Post",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/blogs",
      component: BlogsCategory,
      meta: {
        title: "BlogsCategory",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/blogs/:id",
      component: Blog,
      meta: {
        title: "Blog",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/animal-shelters",
      component: AnimalShelterCategory,
      meta: {
        title: "AnimalShelterCategory",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/animal-shelters/:id",
      component: AnimalShelter,
      meta: {
        title: "AnimalShelter",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/adoptions",
      component: AdoptionCategory,
      meta: {
        title: "AdoptionCategory",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/adoptions/:id",
      component: Adoption,
      meta: {
        title: "Adoption",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/lost-pets",
      component: LostPetCategory,
      meta: {
        title: "LostPetCategory",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/lost-pets/:id",
      component: LostPet,
      meta: {
        title: "LostPet",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/found-pets",
      component: LostPetOwnerCategory,
      meta: {
        title: "LostPetOwnerCategory",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/found-pets/:id",
      component: LostPetOwner,
      meta: {
        title: "LostPetOwner",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    adminRoutes,
    {
      path: "/login",
      component: Login,
      name: "login",
      meta: {
        title: "Login",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        title: "Register",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    {
      path: "/register-shelter",
      component: RegisterShelter,
      meta: {
        title: "RegisterShelter",
        breadcrumb: null,
        icon: "mdi-lamp",
      },
    },
    { path: "/*", redirect: "admin/home" },
  ],
});

router.beforeEach(async (to, from, next) => {
  let status;
  await store
    .dispatch("auth/checkSession")
    .then((response) => {
      status = response.data.auth;
      if (status == false) {
        localStorage.removeItem("user");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn && !status) {
    next("/login");
    return;
  }

  if (to.path == '/login' && loggedIn) {
    next("/");
    return;
  }

  next();
});

export default router;
