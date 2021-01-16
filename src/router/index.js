import Vue from 'vue'
import VueRouter from 'vue-router'
import Coaches from "@/views/Coaches";
import CoachDetails from "@/views/CoachDetails";
import ContactCoach from "@/views/ContactCoach";
import CoachRegister from "@/views/CoachRegister";
import Requests from "@/views/Requests";
import Error404 from "@/views/Error404";
import UserTest from "@/views/UserTest";

Vue.use(VueRouter)

const routes = [
    {path: "/", redirect: '/coaches'},
    {path: "/coaches",component: Coaches},
    {
        path: "/coaches/:id", component: CoachDetails, props: true, children: [
            {path: "contact", component: ContactCoach, props: true},
        ]
    },
    {path: "/register", component: CoachRegister},
    {path: "/requests", component: Requests},
    {path: "/users", component: UserTest},
    {path: "/:notFound(.*)", component: Error404},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
