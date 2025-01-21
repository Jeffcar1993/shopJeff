// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4IcIEv8siw7ufhiQ6Shm7thb9lUcIjYs",
  authDomain: "jeffshop-f41bf.firebaseapp.com",
  projectId: "jeffshop-f41bf",
  storageBucket: "jeffshop-f41bf.firebasestorage.app",
  messagingSenderId: "776456398175",
  appId: "1:776456398175:web:5a3bbf81a711aca8eb02ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);