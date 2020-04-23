import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    //Your Config Values
    apiKey: "AIzaSyBlfP_CdDgjDwnjfPE34Z6NSGwSRSytq7I",
    authDomain: "minggu12w.firebaseapp.com",
    databaseURL: "https://minggu12w.firebaseio.com",
    projectId: "minggu12w",
    storageBucket: "minggu12w.appspot.com",
    messagingSenderId: "715052348730",
    appId: "1:715052348730:web:4a79ffe8a2cfd6b15e0c03",
    measurementId: "G-Y0VXS0CRZF"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;