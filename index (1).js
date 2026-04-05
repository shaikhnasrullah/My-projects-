import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyChIoDJadp134Ee-PFJwjoc2P6qTVL1l0c",
  authDomain: "keto-lenses.firebaseapp.com",
  projectId: "keto-lenses",
  storageBucket: "keto-lenses.firebasestorage.app",
  messagingSenderId: "530755704320",
  appId: "1:530755704320:web:3f6e3d189cddc643e16ae5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);