import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCne1NKGUr2AyJqVohT5fUT98lmvRDUjFc",
  authDomain: "netflixclone-e4cf6.firebaseapp.com",
  projectId: "netflixclone-e4cf6",
  storageBucket: "netflixclone-e4cf6.appspot.com",
  messagingSenderId: "303572621098",
  appId: "1:303572621098:web:e29763c19c9aa4a279b053",
  measurementId: "G-Z2XB14WD05",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
