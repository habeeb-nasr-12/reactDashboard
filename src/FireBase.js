import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  API_KEY: "AIzaSyAQgUYwdHrRTiYUjcl0viklrPFAF6Du6Yo",
  projectId: "react-dashboard-55c2c",
  authDomain: "react-dashboard-55c2c.firebaseapp.com",
  storageBucket: "react-dashboard-55c2c.appspot.com",
  messagingSenderId: "327294718815",
  appId: "1:327294718815:web:4cfd0a59fc3125bf1f5cea",
  measurementId: "G-ZC4TDM8MVN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
