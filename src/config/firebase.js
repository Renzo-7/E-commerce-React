import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_FZFydVoMSZ_4tauN4M9WZKcfh7E2aMA",
  authDomain: "e-commerce-a89a3.firebaseapp.com",
  projectId: "e-commerce-a89a3",
  storageBucket: "e-commerce-a89a3.firebasestorage.app",
  messagingSenderId: "699839546441",
  appId: "1:699839546441:web:b9113521e2ced77abb6b98",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
