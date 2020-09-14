import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBccm6QvXp2j1newvjwUKd5H6dNT5fRYO0",
  authDomain: "mini-atoz-clone-sai-likhith.firebaseapp.com",
  databaseURL: "https://mini-atoz-clone-sai-likhith.firebaseio.com",
  projectId: "mini-atoz-clone-sai-likhith",
  storageBucket: "mini-atoz-clone-sai-likhith.appspot.com",
  messagingSenderId: "617272441739",
  appId: "1:617272441739:web:5ad19777d7c615c7e88d8e",
  measurementId: "G-MXWDZEMWHC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
