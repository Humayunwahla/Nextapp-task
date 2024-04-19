
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyA8M9Eauwu3qL6EaMi2MTlaAxLnveNnr7g",
  authDomain: "nextjsproject-540f0.firebaseapp.com",
  projectId: "nextjsproject-540f0",
  storageBucket: "nextjsproject-540f0.appspot.com",
  messagingSenderId: "494888431555",
  appId: "1:494888431555:web:4b59de200194713fe69776",
  measurementId: "G-YKWQEVR4QK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db,storage };
