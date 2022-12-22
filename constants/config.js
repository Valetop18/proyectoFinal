// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";   
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtR79VSfI-6WfqTmyi7bWujy5FKoPjQ-c",
    authDomain: "proyectofinal-7a023.firebaseapp.com",
    databaseURL: "https://proyectofinal-7a023-default-rtdb.firebaseio.com",
    projectId: "proyectofinal-7a023",
    storageBucket: "proyectofinal-7a023.appspot.com",
    messagingSenderId: "1008653984644",
    appId: "1:1008653984644:web:c1a70dd697a327a17af3d1",
    measurementId: "G-47L2VSQV93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);    

//initizile database
export const db = getDatabase(app);

