import { createApp } from 'vue';
import App from './App.vue';

import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import Register from "@/components/Register.vue";
import Private from "@/components/Private.vue";

import { createRouter, createWebHistory } from 'vue-router';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";



import './assets/main.css';

let authenticated = false;

const routes = [
{
    path: '/', 
    component: HelloWorld
},
{
    path: '/about',
    component: TheWelcome
},
{
    path:'/register',
    component: Register
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

const app = createApp(App);
app.use(router);
app.mount('#app');
