import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkctYENhANmvccGHxDzgh1OXPMCY2au-U",
    authDomain: "uaspbf-1ceca.firebaseapp.com",
    databaseURL: "https://uaspbf-1ceca.firebaseio.com",
    projectId: "uaspbf-1ceca",
    storageBucket: "uaspbf-1ceca.appspot.com",
    messagingSenderId: "831639147472",
    appId: "1:831639147472:web:37786418fa8aa04a92dfd5",
    measurementId: "G-8B6MW4J1D4"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;