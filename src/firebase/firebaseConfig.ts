import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDWpB9ifyB2Je_pOeKQ-kvlJU45MGDNqM8",
    authDomain: "conquest-registration-2024.firebaseapp.com",
    databaseURL: "https://iot-project-59492-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "iot-project-59492",
    storageBucket: "conquest-registration-2024.appspot.com",
    messagingSenderId: "717324955764",
    appId: "1:717324955764:web:4b3f196f079e0caeb62121",
    measurementId: "G-Y33SM3R1B4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig); // Make sure this is called before using any Firebase service.
export const database = getDatabase(app);
