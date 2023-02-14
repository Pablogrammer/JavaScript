import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
//import router from './router'
import HelloWorld from "./components/Helloworld.vue"
import TheWelcome from "./components/TheWelcome.vue"
import NotFound from "./components/NotFound.vue"
import './assets/main.css'

const routes = [
    {
        path: "/",
        component: HelloWorld,
        propd: {
            msg: "Titulo que paso al componente"
        }
    },
    {
        path: "/welcome/:nombre?",
        component: TheWelcome
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: NotFound
    }
];

const router = createRouter({
    //history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes
})
const app = createApp(App)

app.use(router)

app.mount('#app')

