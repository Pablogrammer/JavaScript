import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Initialize Firebase Authentication and get a reference to the service
export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAl6Hj0uF7_idji2JzJc-qpPW-faQkdoRo",
    authDomain: "proyecto-fcefe.firebaseapp.com",
    projectId: "proyecto-fcefe",
    storageBucket: "proyecto-fcefe.appspot.com",
    messagingSenderId: "469205544548",
    appId: "1:469205544548:web:b04efb28d8ad0bbd7e3971"
  });

  //constante auth
export const auth = getAuth(firebaseApp);

  //constante storage
export const storage = getStorage(firebaseApp);

  //constante db
export const db = getFirestore(firebaseApp);



