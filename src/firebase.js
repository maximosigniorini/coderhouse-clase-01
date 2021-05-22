import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyC5kD4TaOPrED_zmpnsRaRfV-53dS_INe8",
    authDomain: "pizzeria-signiorini.firebaseapp.com",
    projectId: "pizzeria-signiorini",
    storageBucket: "pizzeria-signiorini.appspot.com",
    messagingSenderId: "674823143369",
    appId: "1:674823143369:web:8f6fe8ad487aa786437218"
})

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);