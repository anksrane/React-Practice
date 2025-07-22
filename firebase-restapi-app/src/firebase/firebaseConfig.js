import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_mbrErwRc7SUPA728Doeg2ZWJDqjvawk",
  authDomain: "restapi-crud-c076b.firebaseapp.com",
  projectId: "restapi-crud-c076b",
  storageBucket: "restapi-crud-c076b.firebasestorage.app",
  messagingSenderId: "179762273500",
  appId: "1:179762273500:web:937ae59efc46a6a4856819"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);