/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 7/5/2022
 * Time: 3:56 PM
 */

import {initializeApp} from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, writeBatch,} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSwdeQAApNF5t9gjqnOkuailn8Otlb3-o",
  authDomain: "crwn-clothing-db-4d294.firebaseapp.com",
  projectId: "crwn-clothing-db-4d294",
  storageBucket: "crwn-clothing-db-4d294.appspot.com",
  messagingSenderId: "292722353905",
  appId: "1:292722353905:web:848f622c422da3752c2b50",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Instantiate a google provider
const googleProvider = new GoogleAuthProvider();

//set parameters for google provider
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//get auth through firebase...singleton..runs when signin or signout
export const auth = getAuth();

//sign in with auth and google provider
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//get a db instance
export const db = getFirestore();

//create a collection and add data using a batch method
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

//get categories and documents from firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};

//create a new user document
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  //get user reference
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userAuth);

  //create a user snapshot and see if the snapshot already exists
  const userSnapshot = await getDoc(userDocRef);

  //is snapshot is true try to create user login entry
  if (!userSnapshot.exists()) {
    //get the displayName and email from the user auth
    const { displayName, email } = userAuth;
    console.log(displayName, email);

    //add a date time
    const createdAt = new Date();

    //try to set the user info using the user reference
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error logging user", error.message);
    }
  }

  //if the user ref already exists return the reference.
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUserOut = async () => await signOut(auth);

/*
 * observes the state of auth and runs the callback function when that state changes
 * it is an open listener...when mounted it is always waiting to see if the state of auth changes
 * */
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);