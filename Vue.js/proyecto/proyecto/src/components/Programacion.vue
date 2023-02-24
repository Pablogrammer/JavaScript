<script setup>
import { collection } from "firebase/firestore";
import { useFirestore,useCollection } from 'vuefire';
import { onAuthStateChanged} from "firebase/auth";
import {ref} from "vue";
import {auth} from "../firebase.js"

let nombreUsuario=ref("");

const db = useFirestore()
const cursos = useCollection(collection(db, 'cursos'))

onAuthStateChanged(auth, (user) => {
if (user) {
    const uid = user.uid;
    nombreUsuario.value=user.email;
}
});

</script>

<template>

    <h1>Programación</h1>
<table>
    <tr><th>Nombre</th><th>Horas</th><th>Imagen</th><th v-if="nombreUsuario!=''">Inscripcion</th></tr>

    <tbody v-for="curso in cursos" :key="curso.nombre">
            <tr v-if="curso.categoria=='programacion'">
                <td>
                    <RouterLink v-bind:to="'/detallar/' + curso.id">{{ curso.nombre }}</RouterLink>
                </td>
                <td>{{ curso.horas }}</td>
                <td><img v-bind:src="'../src/images/'+curso.imagen" v-bind:alt="''+curso.imagen" width="50"></td>
                <td v-if="nombreUsuario!=''"><button>Incribirse</button></td>
                
            </tr>
        </tbody>
</table>
</template>

<style>


tbody, td, tr, th{
    padding: 10px;
    color: white;
    border: 2px white solid;
    background-color: rgba(0, 255, 115, 0.101);
}

button{
    cursor: pointer;
}


</style>