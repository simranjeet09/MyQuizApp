import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrs8NnDIEabohmw9tmotjlTL5I_dRQx04",
  authDomain: "quiza-7add5.firebaseapp.com",
  projectId: "quiza-7add5",
  storageBucket: "quiza-7add5.appspot.com",
  messagingSenderId: "453448610788",
  appId: "1:453448610788:web:55f43ab2f6b087f6cc0df1"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };