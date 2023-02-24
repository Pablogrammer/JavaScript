<script setup>
import { collection } from "firebase/firestore";
import { useFirestore,useCollection } from 'vuefire'

const db = useFirestore()
const cursos = useCollection(collection(db, 'cursos'))

</script>
<template>
    <h1>Ofimática</h1>
    <tr><th>Nombre</th><th>Horas</th><th>Imagen</th><th>Inscripcion</th></tr>

    <tbody v-for="curso in cursos" :key="curso.nombre">
            <tr v-if="curso.categoria=='ofimatica'">
                <td>{{ curso.nombre }}</td>
                <td>{{ curso.horas }}</td>
                <td><img v-bind:src="'../src/images/'+curso.imagen" v-bind:alt="''+curso.imagen" width="50"></td>
                <td><button>Incribirse</button></td>
            </tr>
        </tbody>
</template>