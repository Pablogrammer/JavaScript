<script setup>
import { collection, doc, deleteDoc } from "firebase/firestore";
import { useFirestore, useCollection } from 'vuefire'
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

function borrarCurso(id){
    deleteDoc(doc((db), 'cursos', id));
}

</script>
<template>
    <h1>Ofimática</h1>
    <table>
    <tr><th>Nombre</th><th>Horas</th><th>Imagen</th><th v-if="nombreUsuario!=''">Inscripcion</th><th v-if="nombreUsuario=='admin@admin.es'">Acciones</th></tr>

    
    <tbody v-for="curso in cursos" :key="curso.nombre">
            <tr v-if="curso.categoria=='ofimatica'">
                <td>
                    <RouterLink v-bind:to="'/detallar/' + curso.id">{{ curso.nombre }}</RouterLink>
                </td>
                <td>{{ curso.horas }}</td>
                <td><img v-bind:src="'../src/images/'+curso.imagen" v-bind:alt="''+curso.imagen" width="50"></td>
                <td v-if="nombreUsuario!=''"><button>Incribirse</button></td>
                <td v-if="nombreUsuario=='admin@admin.es'"><button @click="borrarCurso(curso.id)">Borrar</button></td>
            </tr>
        </tbody>
    </table>
</template>