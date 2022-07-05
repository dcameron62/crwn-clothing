/**
 * Created by PHP Storm
 * Author: Don Cameron
 * Date: 7/5/2022
 * Time: 3:56 PM
 */

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
