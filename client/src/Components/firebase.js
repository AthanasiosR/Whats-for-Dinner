import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCEY9MU7hVWX8a4GFEelxQJMdNJC8GjWPw",
  authDomain: "auth-development-9e615.firebaseapp.com",
  projectId: "auth-development-9e615",
  storageBucket: "auth-development-9e615.appspot.com",
  messagingSenderId: "613894337869",
  appId: "1:613894337869:web:75129f912192bf0c563304",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
