import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
//import router from './router'
import HelloWorld from "./components/Helloworld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import NotFound from "./components/NotFound.vue";
import './assets/main.css';
import registro from '@/components/registro.vue'
import {VueFire, VueFireAuth} from 'vuefire';
import { auth, firebaseApp} from '@/firebase';
import privado from '@/components/privado.vue';
import { onAuthStateChanged } from 'firebase/auth';

let estaAutenticado=false;

const app = createApp(App)
app.use(VueFire, {
    firebaseApp, modules:[VueFireAuth()]
});

const routes = [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/registro',
      component: registro
    },
    {
        path: '/privado/',
        component: privado,
        beforeEnter: (to, from) => {
            if(estaAutenticado)
                return true
            else
                return false
            return false;
        }
    }

   ]

onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      estaAutenticado = true;
    } else {
        estaAutenticado = false;
    }
});

const router = createRouter({
    //history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes
})

app.use(router)

app.mount('#app')

