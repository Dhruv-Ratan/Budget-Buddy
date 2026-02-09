// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "APIKEY",
    authDomain: "domain",
    projectId: "id",
    storageBucket: "bucket",
    messagingSenderId: "id",
    appId: "id",
    measurementId: "id"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

