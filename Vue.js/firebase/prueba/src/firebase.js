import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export const firebaseApp = initializeApp({
  // your application settings
  apiKey: "AIzaSyCyH19Fx9M2AN6fOpP61N5LaMuZGBFRW0A",
  authDomain: "prueba-36daf.firebaseapp.com",
  projectId: "prueba-36daf",
  storageBucket: "prueba-36daf.appspot.com",
  messagingSenderId: "90193182754",
  appId: "1:90193182754:web:d421b2be710467d63263c8"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)