import { createApp } from 'vue';
import App from './App.vue';

import Inicio from "@/components/Inicio.vue";
import Programacion from "@/components/Programacion.vue";
import Ofimatica from "@/components/Ofimatica.vue";
import SOs from "@/components/SOs.vue";
import Login from "@/components/Login.vue";
import Private from "@/components/Private.vue";

import { createRouter, createWebHistory } from 'vue-router';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

import './assets/main.css';

let authenticated = false;

const routes = [
{
    path: '/', 
    component: Inicio
},
{
    path: '/programacion',
    component: Programacion
},
{
    path: '/ofimatica',
    component: Ofimatica
},
{
    path: '/sos',
    component: SOs
},
{
    path:'/login',
    component: Login
},
{
    path: '/private',
    component:Private,
    beforeEnter: (to, from) => {
        // reject the navigation
        return authenticated;
      },
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      authenticated = true;
    } else {
      authenticated = false;
      router.push("/");
    }
});

var app = createApp(App);
app.use(router);
app.mount('#app');
