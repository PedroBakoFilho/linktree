
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDK3qrbNTLr1Co82BEod48gKgnTCAqvGmY",
    authDomain: "linktreeimex.firebaseapp.com",
    projectId: "linktreeimex",
    storageBucket: "linktreeimex.appspot.com",
    messagingSenderId: "932496119807",
    appId: "1:932496119807:web:278a0c88a722b7c821b9ca"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth,db }
///