// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBSBDRVutnL8T0axdo5m2jd1HXEIDOs80k",
    authDomain: "budget-buddy-a5b41.firebaseapp.com",
    projectId: "budget-buddy-a5b41",
    storageBucket: "budget-buddy-a5b41.appspot.com",
    messagingSenderId: "162590120956",
    appId: "1:162590120956:web:6ed2c64fe818ad899e7079",
    measurementId: "G-HT6X8QGSP4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
