<script setup>
import { collection } from "firebase/firestore";
import { useFirestore,useCollection } from 'vuefire';

const db = useFirestore()
const cursos = useCollection(collection(db, 'cursos'))


</script>

<template>

    <h1>Programación</h1>
    <tr><th>Nombre</th><th>Horas</th><th>Imagen</th><th>Inscripcion</th></tr>

    <tbody v-for="curso in cursos" :key="curso.nombre">
            <tr v-if="curso.categoria=='programacion'">
                <td>{{ curso.nombre }}</td>
                <td>{{ curso.horas }}</td>
                <td><img v-bind:src="'../src/images/'+curso.imagen" v-bind:alt="''+curso.imagen" width="50"></td>
                <td><button>Incribirse</button></td>
            </tr>
        </tbody>
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