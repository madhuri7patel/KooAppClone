// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSp6ikXSB0cw5YPtaassBzIdUtRL6IGSw",
  authDomain: "kooappclone.firebaseapp.com",
  projectId: "kooappclone",
  storageBucket: "kooappclone.appspot.com",
  messagingSenderId: "389123845638",
  appId: "1:389123845638:web:eeb76f933d15f3beb59d87",
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
