import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAr445VZd62vDN-0sAghaIGucPT2isqWNU",
  authDomain: "fir-d82f1.firebaseapp.com",
  databaseURL: "https://fir-d82f1-default-rtdb.firebaseio.com",
  projectId: "fir-d82f1",
  storageBucket: "fir-d82f1.firebasestorage.app",
  messagingSenderId: "484154436348",
  appId: "1:484154436348:web:25f38262382af9c9870579",
  measurementId: "G-0Y4S5LJMVB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);