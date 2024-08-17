// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZA3bKDlpFWJK8X0DJeYkeOvyR9TN3PB8",
  authDomain: "flashcardsaas-ea650.firebaseapp.com",
  projectId: "flashcardsaas-ea650",
  storageBucket: "flashcardsaas-ea650.appspot.com",
  messagingSenderId: "363838444345",
  appId: "1:363838444345:web:05782506355769b21d8ee8",
  measurementId: "G-1ZW1YJWCQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);