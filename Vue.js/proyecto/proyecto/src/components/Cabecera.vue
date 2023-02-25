<script setup>
import { onAuthStateChanged,signOut} from "firebase/auth";
import {ref} from "vue";
import {auth} from "../firebase.js"

let nombreUsuario=ref("");

//Detecta un inicio de sesión
onAuthStateChanged(auth, (user) => {
if (user) {
    const uid = user.uid;
    nombreUsuario.value=user.email;
}
});

//Cierra la sesión activa
function cerrarSesion(){
    signOut(auth).then(() => {
        nombreUsuario='';
        location.reload();
    }).catch((error) => {
    // An error happened.
    });
}

</script>

<template>
    <!-- Header -->
    <header>
        <nav>
            <router-link to="/">Inicio</router-link> 
            <router-link to="/ofimatica">Ofimatica</router-link> 
            <router-link to="/programacion">Programación</router-link> 
            <router-link to="/SOs">SOs</router-link> 
            <router-link v-if="nombreUsuario=='admin@admin.es'" to="/private">  Administración</router-link> 
            <router-link v-if="nombreUsuario==''" to="/login">Login</router-link> 
            <button @click="cerrarSesion" v-else="nombreUsuario!=''" to="/inicio">Cerrar sesion</button> 
        </nav>
    </header>

</template>

<style>
header a{
    padding: 2rem;
}
</style>