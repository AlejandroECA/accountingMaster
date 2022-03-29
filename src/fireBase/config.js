
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBEYguKxpG1CRLQLXIUhIAgV3d1ekaMdso",
  authDomain: "accountingmaster-f88af.firebaseapp.com",
  projectId: "accountingmaster-f88af",
  storageBucket: "accountingmaster-f88af.appspot.com",
  messagingSenderId: "54905123172",
  appId: "1:54905123172:web:a1ebb42a129f707f014a71",
  measurementId: "G-ZC8FPQ9TQZ"
};

//init firebase
initializeApp(firebaseConfig)

//init getFirestore
const db = getFirestore()

//init firebase Auth
const auth = getAuth()


export { db, auth }