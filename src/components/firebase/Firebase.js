import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChm1BnRmp3XrDlygg5mkj143whUumcUP8",
    authDomain: "instagramclone-1b500.firebaseapp.com",
    projectId: "instagramclone-1b500",
    storageBucket: "instagramclone-1b500.appspot.com",
    messagingSenderId: "973186596136",
    appId: "1:973186596136:web:5ae95ee493d2b4da13241d",
    measurementId: "G-C3ZGNMZ0XY"
  };


  firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();