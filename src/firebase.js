import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKJRFDms9FfKe0dSNKO9u_10XPB0b_gpo",
    authDomain: "whatsapp-clone-18a69.firebaseapp.com",
    projectId: "whatsapp-clone-18a69",
    storageBucket: "whatsapp-clone-18a69.appspot.com",
    messagingSenderId: "355117905925",
    appId: "1:355117905925:web:0ebe91c2b310a0f5bf846c",
    measurementId: "G-3W7FTESPLK"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;