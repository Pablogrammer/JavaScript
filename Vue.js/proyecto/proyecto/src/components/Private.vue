<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";

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

    function closeSession(){
            signOut(auth).then(() => {
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
            });
    }

</script>


<template>
    <h1>Private Zone</h1>
    <h2>Hello {{ username }}</h2>
    <button @click="closeSession">Close Session</button>
</template>