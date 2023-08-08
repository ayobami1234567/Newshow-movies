// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBlHxLa2VAvZ-wO_wA8YFktFiweesJD6U",
  authDomain: "eshop-cc486.firebaseapp.com",
  projectId: "eshop-cc486",
  storageBucket: "eshop-cc486.appspot.com",
  messagingSenderId: "843572326692",
  appId: "1:843572326692:web:a25708ff3f0887028303b1",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
