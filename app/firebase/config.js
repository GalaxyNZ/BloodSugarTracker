import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV42NwjKy1VV1uLDKn6oLfVs6wl_PxqTE",
  authDomain: "blood-sugar-tracker-b65e4.firebaseapp.com",
  databaseURL: "https://blood-sugar-tracker-b65e4.firebaseio.com",
  projectId: "blood-sugar-tracker-b65e4",
  storageBucket: "blood-sugar-tracker-b65e4.appspot.com",
  messagingSenderId: "84320130367",
  appId: "1:84320130367:android:baf45313d2e774d72aaf8a",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
