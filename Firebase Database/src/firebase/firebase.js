import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6M00CWJ5woTBY1veBaYxq1nK4nfA_1Bw",
  authDomain: "project-fc043.firebaseapp.com",
  projectId: "project-fc043",
  storageBucket: "project-fc043.firebasestorage.app",
  messagingSenderId: "172205811949",
  appId: "1:172205811949:web:e8d8e5d844d2d126b244e4",
  measurementId: "G-0G5CGLYTXL",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const rtdb = getDatabase(app);

export { db, rtdb };
