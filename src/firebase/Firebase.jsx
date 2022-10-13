import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArDhqFrxMpajA916pB5J72twSNs885Sg8",
    authDomain: "markethub-2c224.firebaseapp.com",
    projectId: "markethub-2c224",
    storageBucket: "markethub-2c224.appspot.com",
    messagingSenderId: "786927598558",
    appId: "1:786927598558:web:ee1e20f72212ec8d8d7b4f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
