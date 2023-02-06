// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB5eH0jJKQuTse6C-4Jgyp6nsKXT2v3920",
  authDomain: "angular-poc-bookstore.firebaseapp.com",
  projectId: "angular-poc-bookstore",
  storageBucket: "angular-poc-bookstore.appspot.com",
  messagingSenderId: "1029013332629",
  appId: "1:1029013332629:web:95b7c0322ec2dabc4bf19c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);