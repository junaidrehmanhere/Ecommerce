import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKt-5VOSpIr86pDaBhyvTCY-e1SrlYAYo",
    authDomain: "e-commerce-authenticatio-bdc8e.firebaseapp.com",
    projectId: "e-commerce-authenticatio-bdc8e",
    storageBucket: "e-commerce-authenticatio-bdc8e.appspot.com",
    messagingSenderId: "902364015374",
    appId: "1:902364015374:web:5acbad90f01b205918055f",
    measurementId: "G-VQFJSNHWWY"
  };
  const app=initializeApp(firebaseConfig);

export  const auth=getAuth(app);