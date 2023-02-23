<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { getStorage, ref as refStrg, uploadBytes } from "firebase/storage";

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

    let file = ref ("");
    
    function uploadFile(){
        const storage = getStorage();
        const storageRef = refStrg(storage, file.value.files[0].name);
        uploadBytes(storageRef, file.value.files[0]).then((snapshot) => {
            console.log('Uploaded a blob file');
        });
    }

</script>


<template>
    <h1>Private Zone</h1>
    <h2>Hello {{ username }}</h2>
    <button @click="closeSession">Close Session</button>
    <p><input type="file" name="file" id="file" ref="file" @change="uploadFile"></p>
</template>