// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgY1YuXJW6YKhnxy3T4udkqEjVXHx66Oo",
    authDomain: "xenon-axe-234500.firebaseapp.com",
    databaseURL: "https://xenon-axe-234500.firebaseio.com",
    projectId: "xenon-axe-234500",
    storageBucket: "xenon-axe-234500.appspot.com",
    messagingSenderId: "56419322761",
    appId: "1:56419322761:web:b0af106dea413642726f58",
    measurementId: "G-JSC384K0R5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};