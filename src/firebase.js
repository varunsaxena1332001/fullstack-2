import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWmzzPMxrO-gkJxGotEPxk4ugWEg4SunE",
    authDomain: "whatsappclone-2604b.firebaseapp.com",
    projectId: "whatsappclone-2604b",
    storageBucket: "whatsappclone-2604b.appspot.com",
    messagingSenderId: "365853881819",
    appId: "1:365853881819:web:a35bedd50ecaa43bebe3fe",
    measurementId: "G-YJ14V6H838"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;