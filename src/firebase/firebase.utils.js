import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBIUmO0DaUyxJ2W7oWQM3CIsSzsDf6G4lI",
  authDomain: "shoply-34e73.firebaseapp.com",
  projectId: "shoply-34e73",
  storageBucket: "shoply-34e73.appspot.com",
  messagingSenderId: "99475317037",
  appId: "1:99475317037:web:1601363cf87a4a6adb73a4",
  measurementId: "G-FTSDX14HRX"
};


firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
provider.addScope('profile'); 
provider.addScope('email');

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;