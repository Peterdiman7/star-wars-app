import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1i3vPlCMoExjMy_tkIRtjwa1whzwZcr0",
    authDomain: "react-star-wars-a9613.firebaseapp.com",
    projectId: "react-star-wars-a9613",
    storageBucket: "react-star-wars-a9613.appspot.com",
    messagingSenderId: "688975825427",
    appId: "1:688975825427:web:0dd380044147c8a8970de6"
  };

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;

export const auth = firebase.auth();
