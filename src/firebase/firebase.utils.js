import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, setDoc, writeBatch, onSnapshot, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIUmO0DaUyxJ2W7oWQM3CIsSzsDf6G4lI",
  authDomain: "shoply-34e73.firebaseapp.com",
  projectId: "shoply-34e73",
  storageBucket: "shoply-34e73.appspot.com",
  messagingSenderId: "99475317037",
  appId: "1:99475317037:web:1601363cf87a4a6adb73a4",
  measurementId: "G-FTSDX14HRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, doc, getDoc, setDoc, writeBatch, onSnapshot, query } 

export const auth = getAuth()

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
provider.addScope('profile'); 
provider.addScope('email');

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (authUser, additionalData) => {
  if(!authUser) return;

  const usersRef = collection(db, "users");
  const userRef = doc(usersRef, authUser.uid);
  const snapShot = await getDoc(userRef);
  console.log('snapshot', snapShot.data())

  if(!snapShot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      }); 
    } catch (error) {
      console.log("error creating user", error.message)
    }
  } 
  return snapShot;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const batch = writeBatch(db)
  
  const collectionRef = collection(db, collectionKey)

  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef)
    batch.set(newDocRef, obj)
  });

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})
}

