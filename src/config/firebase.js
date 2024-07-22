import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqmv3B1cb9ERok_cqQpHBI9KbuAENNCp8",
    authDomain: "longhorn-9b3f3.firebaseapp.com",
    projectId: "longhorn-9b3f3",
    storageBucket: "longhorn-9b3f3.appspot.com",
    messagingSenderId: "179212968426",
    appId: "1:179212968426:web:1c0949b97f6e149396d293",
};

console.log("se conecto")
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)