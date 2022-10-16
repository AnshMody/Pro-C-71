import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDrGSco7Aw09e0RNAxaaRM6zo2Z8qBYPso",
    authDomain: "e-ride-a1b09.firebaseapp.com",
    projectId: "e-ride-a1b09",
    storageBucket: "e-ride-a1b09.appspot.com",
    messagingSenderId: "1008988752666",
    appId: "1:1008988752666:web:b99e6fed226082cff5faa3"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
