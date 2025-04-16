// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbYfGy0fM0eWDdl5ovbQAlpv44Dcmr-to",
  authDomain: "my-portfolio-402a5.firebaseapp.com",
  databaseURL: "https://my-portfolio-402a5-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-402a5",
  storageBucket: "my-portfolio-402a5.appspot.com",
  messagingSenderId: "964260655775",
  appId: "1:964260655775:web:b26c0f87da67209139a8aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);np