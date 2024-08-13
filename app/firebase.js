// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXZZtP307n-2sFhEexepzRKOsS66HwSX8",
  authDomain: "chat-support-ab0b8.firebaseapp.com",
  projectId: "chat-support-ab0b8",
  storageBucket: "chat-support-ab0b8.appspot.com",
  messagingSenderId: "782581149650",
  appId: "1:782581149650:web:ec02a3c39da22abd87e20b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth, app};