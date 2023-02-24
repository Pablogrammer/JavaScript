<script setup>
import { onAuthStateChanged,signOut} from "firebase/auth";
import {ref} from "vue";
import {auth} from "../firebase.js"

let nombreUsuario=ref("");

onAuthStateChanged(auth, (user) => {
if (user) {
    const uid = user.uid;
    nombreUsuario.value=user.email;
}
});


function cerrarSesion(){
    signOut(auth).then(() => {
        nombreUsuario='';
        location.reload();
    }).catch((error) => {
    // An error happened.
    });
}</script>

<template>

    <nav>
        <router-link to="/">Inicio | </router-link> 
        <router-link to="/ofimatica">Ofimatica | </router-link> 
        <router-link to="/programacion">Programación | </router-link> 
        <router-link to="/SOs">SOs | </router-link> 
        <router-link v-if="nombreUsuario!=''" to="/private">  Administración | </router-link> 
        <router-link v-if="nombreUsuario==''" to="/login">Login | </router-link> 
        <button @click="cerrarSesion" v-else="nombreUsuario!=''" to="/inicio">Cerrar sesion</button> 
    </nav>

</template>