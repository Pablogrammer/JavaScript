<script setup>
import { doc, onSnapshot, collection } from "firebase/firestore";
import {db} from "@/firebase";

let cursos = [];
const unsub = onSnapshot(collection(db, "cursos"), (docs) => {
    docs.forEach((doc) => {
    console.log(doc.id, "=> ", doc.data());
    cursos.push([doc.data()]);
    });
    console.log(cursos);
});

</script>

<template>
    <h1>Programación</h1>

    <table>
        <tr>
            <th>Nombre</th>
            <th>Horas</th>
            <th>imagen</th>
            <th>Inscipción</th> 
        </tr>
        <tr>
            <td>Python</td>
            <td> 8:15-10:15 </td>
            <td><img src="../images/python.png" alt="python.png" style="width: 50px;"></td>
            <td><button>Inscripción</button></td>
        </tr>
        <tr>
            <td>JavaScript</td>
            <td> 12:00 - 14:00 </td>
            <td><img src="../images/javascript.png" alt="javascript.png" style="width: 50px;"></td>
            <td><button>Inscripción</button></td>
        </tr>
        <tr>
            <td>Php</td>
            <td> 16:00-18:00 </td>
            <td><img src="../images/php.png" alt="php.png" style="width: 50px;"></td>
            <td><button>Inscripción</button></td>
        </tr>

    </table>
</template>

<style>
table, td, tr, th{
    padding: 10px;
    color: white;
}

table {
  background-image: linear-gradient(to bottom, rgba(255, 0, 208, 0.719) 0%, rgba(0, 0, 255, 0.714) 100%); /* the gradient */
  background-origin: border-box; /* set background to start from border-box */
  border-spacing: 5px; /* space between each cell */
  border: 5px solid white; /* optional */
  
}

button{
    cursor: pointer;
}
</style>