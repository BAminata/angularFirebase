// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS52X0fgwBH9c75VYQglIcerg2x9nLQi8",
  authDomain: "lab5-seg3502-cf8f6.firebaseapp.com",
  projectId: "lab5-seg3502-cf8f6",
  storageBucket: "lab5-seg3502-cf8f6.appspot.com",
  messagingSenderId: "378297030093",
  appId: "1:378297030093:web:5da8a29bc15ee6660de084",
  measurementId: "G-V3HE1KGNJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

