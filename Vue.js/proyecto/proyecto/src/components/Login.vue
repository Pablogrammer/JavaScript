<script setup>
    import { ref } from "vue";
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { auth } from "../firebase.js";

    let username = ref(""), password=ref("");

    function registration(){
    createUserWithEmailAndPassword(auth, username.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
    });

    }



</script>

<template>
    <label>Username: </label> <input type="text" v-model="username"/><br>
    <label>Password: </label> <input type="password" v-model="password"/><br>
    <button @click="registration">Register</button>

</template>