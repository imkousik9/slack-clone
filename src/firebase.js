import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBbCdQT2CoQY8LhfonL1QwV9CJ00J2GL2s',
  authDomain: 'slack-clone-5b130.firebaseapp.com',
  databaseURL: 'https://slack-clone-5b130.firebaseio.com',
  projectId: 'slack-clone-5b130',
  storageBucket: 'slack-clone-5b130.appspot.com',
  messagingSenderId: '102003907468',
  appId: '1:102003907468:web:a4c6489faa12817ae694a9',
  measurementId: 'G-J0CYGW162C'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
