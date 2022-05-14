import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDupm83aWjOmdf4tPqxD-bEuW0mlA5Yzhs",
  authDomain: "smit-app-6671e.firebaseapp.com",
  projectId: "smit-app-6671e",
  storageBucket: "smit-app-6671e.appspot.com",
  messagingSenderId: "501850488401",
  appId: "1:501850488401:web:e1fdd205996e7918244270",
  measurementId: "G-53798LDW4Q"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};


