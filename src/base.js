import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAY9DN5ILa0LUQwMR4UmTjHGcl_V7bVEO4",
  authDomain: "catch-of-the-day-mariana.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mariana.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;