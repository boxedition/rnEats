import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDwEX0hDLLER_3OEPKWgTXzXPT6ibS_yA8",
    authDomain: "rnapps-a1c83.firebaseapp.com",
    projectId: "rnapps-a1c83",
    storageBucket: "rnapps-a1c83.appspot.com",
    messagingSenderId: "58342370689",
    appId: "1:58342370689:web:27d8ae45ab1c2470ca8c80"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase;