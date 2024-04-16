// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB01xA6Ra8BEJriwJ-d1QqztgE8oWstmFg",
  authDomain: "aki-app-89382.firebaseapp.com",
  projectId: "aki-app-89382",
  storageBucket: "aki-app-89382.appspot.com",
  messagingSenderId: "567922054038",
  appId: "1:567922054038:web:c8bb80c01de9de067683b7",
  measurementId: "G-ZK496BE0GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);