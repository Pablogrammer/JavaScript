<script setup>
import {ref} from "vue";
import {auth} from "@/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";


let usuario = ref(""), password = ref("");

function altaUsuario() {
    createUserWithEmailAndPassword(auth, usuario.value, password.value)
    //singInWithPopup(auth, new GoogleAuthProvider())
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

</script>

<template>
    Usuario: <input type="text" v-model="usuario">
    Password: <input type="password" v-model="password">

    <button @click="altaUsuario">Registrar usuario</button>
</template>