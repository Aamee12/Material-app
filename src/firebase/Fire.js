// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMBEmHT7U-zU8Vfqziat3BWdyKperTQzU",
  authDomain: "material-ui-app-b1cd0.firebaseapp.com",
  projectId: "material-ui-app-b1cd0",
  storageBucket: "material-ui-app-b1cd0.appspot.com",
  messagingSenderId: "859757813581",
  appId: "1:859757813581:web:30fbbddd4532078b52e104",
  measurementId: "G-827X6S3BM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);