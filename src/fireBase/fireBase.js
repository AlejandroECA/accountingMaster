// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEYguKxpG1CRLQLXIUhIAgV3d1ekaMdso",
  authDomain: "accountingmaster-f88af.firebaseapp.com",
  projectId: "accountingmaster-f88af",
  storageBucket: "accountingmaster-f88af.appspot.com",
  messagingSenderId: "54905123172",
  appId: "1:54905123172:web:a1ebb42a129f707f014a71",
  measurementId: "G-ZC8FPQ9TQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);