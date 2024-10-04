// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDSIpSKIF5YCczqHqkdGywEN3VlWIt__m0",
  authDomain: "mapemtest-69420.firebaseapp.com",
  databaseURL: "https://mapemtest-69420-default-rtdb.firebaseio.com",
  projectId: "mapemtest-69420",
  storageBucket: "mapemtest-69420.appspot.com",
  messagingSenderId: "34257012133",
  appId: "1:34257012133:web:b3199cc38a10701d4c144c",
  measurementId: "G-HSD67XT1YF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);