import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAga8FnbzMx0DCwaxBXhsOMR6e4BMdRyB8",
  authDomain: "music-b83b2.firebaseapp.com",
  projectId: "music-b83b2",
  storageBucket: "music-b83b2.appspot.com",
  // messagingSenderId: "82357705249", // not used
  appId: "1:82357705249:web:f67df9fc0f421a13a3e160"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);