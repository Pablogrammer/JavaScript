<script setup>
import { useFirestore,useCollection } from 'vuefire';
import { collection} from "firebase/firestore";
import { jsPDF } from "jspdf";
const db = useFirestore();
const cursos = useCollection(collection(db, 'cursos'));

var descr= 'Descripcion: En este curso de ';

//Generación de pdf mediante jspdf
function genPdf(nombre, horas, img, descr){
    let doc = new jsPDF();
    let logo = new Image();
    let descripcion = descr;
    logo.src = '../src/images/' + img;
    doc.text(20, 20, 'Nombre del curso: ' + nombre);
    doc.text(20, 40, 'Numero de horas del curso: ' + horas);
    doc.addImage(logo, 'png', 20, 50, 70, 70);
    doc.text(20, 140, descripcion);
    doc.save('Curso_' + nombre + '.pdf');
}

</script>

<template>
    <!-- Descripción de el curso -->
        <div v-for="curso in cursos" :key="curso.nombre">
            <p v-if="curso.id == $route.params.id">
                <h1>Nombre del curso: {{ curso.nombre }}</h1><br><br>
                <h2>Horas del curso: {{ curso.horas }}</h2><br><br>
                <span><img v-bind:src="'/src/images/' + curso.imagen" width="150"></span><br><br>
                <h2>Descripcion: En este curso de {{ curso.nombre }} aprenderás lo básico sobre {{ curso.categoria }}. Y con solo {{ curso.horas }} horas de curso te convertirás en todo un experto</h2><br><br>
                <span v-if="username!=''"><button>Incribirse</button></span>
                <span><h1><router-link v-bind:to="'/' + curso.categoria">Volver</router-link></h1></span>
                <span><button @click="genPdf(curso.nombre, curso.horas, curso.imagen, descr+=curso.nombre+' aprenderás lo básico sobre\n '+curso.categoria+'. Y con solo '+curso.horas+' horas de curso te convertirás en todo un experto')">Generar Pdf</button></span>
            </p>
        </div>


</template>