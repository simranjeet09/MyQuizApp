import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXtf9QTqRX4VzgkEkgHG3xLK0G_gKxWbk",
  authDomain: "quizapp-5b2d4.firebaseapp.com",
  databaseURL: "https://quizapp-5b2d4-default-rtdb.firebaseio.com",
  projectId: "quizapp-5b2d4",
  storageBucket: "quizapp-5b2d4.appspot.com",
  messagingSenderId: "1001797232174",
  appId: "1:1001797232174:web:7096f182bb44b44ed0e1bf"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };