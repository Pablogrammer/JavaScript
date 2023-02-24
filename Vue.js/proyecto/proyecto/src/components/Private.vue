<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from 'vuefire';

const db = useFirestore()
const cursos = useCollection(collection(db, 'cursos'))



console.log(cursos);    

let username = ref("");

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
    <h1>Administración</h1>
    <h2>Bienvenido {{ username }}</h2>
    <tbody v-for="curso in cursos" :key="curso.nombre">
            <tr>
                <td>{{ curso.nombre }}</td>
                <td>{{ curso.horas }}</td>
                <td><img v-bind:src="'../src/images/'+curso.imagen" width="50"></td>
            </tr>
        </tbody>


</template>