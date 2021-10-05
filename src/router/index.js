import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
    {
    path: "/",
    name: "home",
    component: () => import("../components/Home.vue"),
    },
    {
        path: "/info",
        name: "info",
        component: () => import("../components/info.vue"),
    },
    {
        path: "/QS",
        name: "quienessomos",
        component: () => import("../components/QuienesSomos.vue"),
    },
    {
        path: "/create",
        name: "home",
        component: () => import("../components/Create.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../components/login.vue"),
    },
    {
    path: "/view",
    name: "view",
    component: () => import("../components/List.vue"),
    },
    {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/Edit.vue"),
    },
    {
        path: "/hello",
        name: "hello",
        component: () => import("../components/HelloWorld.vue"),
        },
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
export default router;