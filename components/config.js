import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBfQ6BHcrEV7Ez2CD7wdcZLOKDpV0j8CtY',
  authDomain: 'quizapp-99bdb.firebaseapp.com',
  databaseURL: 'https://quizapp-99bdb-default-rtdb.firebaseio.com',
  projectId: 'quizapp-99bdb',
  storageBucket: 'quizapp-99bdb.appspot.com',
  messagingSenderId: '271954217712',
  appId: '1:271954217712:web:12d49131a7d465845b1035',
  measurementId: 'G-4NE4PV4WBM',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
