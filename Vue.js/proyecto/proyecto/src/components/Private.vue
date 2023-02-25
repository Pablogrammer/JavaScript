<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from 'vuefire';

import programacion from "../components/Programacion.vue";
import SOs from "../components/SOs.vue";
import ofimatica from "../components/Ofimatica.vue";



const db = useFirestore()
const cursos = useCollection(collection(db, 'cursos'))

let username = ref("");

//Detecta un inicio de sesión
    onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // authenticated = true;
        username.value = user.email
        } 
    });

</script>

<template>
    <!-- Pagina de administración -->
    <h1>Administración</h1>
    <h2>Bienvenido {{ username }}</h2>
    
    <!-- Link de crear nuevo curso -->
    <h1><RouterLink v-bind:to="'/CrearCurso/'"> Crear Curso Nuevo</RouterLink></h1>
    
    <!-- Contenido de todos los componentes -->
    <programacion></programacion>

    <SOs></SOs>
    
    <ofimatica></ofimatica>


</template>