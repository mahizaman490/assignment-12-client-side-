// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCsmtRjvZXMderUDhJtDcPm79fWlOwxGvU",
//   authDomain: "bd-parcel-management.firebaseapp.com",
//   projectId: "bd-parcel-management",
//   storageBucket: "bd-parcel-management.appspot.com",
//   messagingSenderId: "506778202966",
//   appId: "1:506778202966:web:011c49de97ef8d72925cf7"
// };

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);

const firebaseConfig = {
    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId:import.meta.env.VITE_messagingSenderId,
    appId:import.meta.env.VITE_appId
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;