// firebaseConfig.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const firebaseConfig = {
    apiKey: "AIzaSyDXjmGepaQKXJITGUOIwjw_6AuZxtDHLZ8",
    authDomain: "campus-connect-8a7e7.firebaseapp.com",
    databaseURL: "https://campus-connect-8a7e7-default-rtdb.firebaseio.com",
    projectId: "campus-connect-8a7e7",
    storageBucket: "campus-connect-8a7e7.firebasestorage.app",
    messagingSenderId: "672031438837",
    appId: "1:672031438837:web:21c2e3a9f2b3b27bb552bc",
    measurementId: "G-M6JKPFBVNC"
  };
  