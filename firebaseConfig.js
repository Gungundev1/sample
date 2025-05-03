// firebaseConfig.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const firebaseConfig = {
  apiKey: "AIzaSyAWjYAe_DujxqvFzZM6Miiqb35KUZBK9eA",
  authDomain: "campusconnect-80fe4.firebaseapp.com",
  projectId: "campusconnect-80fe4",
  storageBucket: "campusconnect-80fe4.firebasestorage.app",
  messagingSenderId: "302197289485",
  appId: "1:302197289485:web:7d4b36e9c628485f3c9b44",
  measurementId: "G-JZ1QR30Q29"
  };
  