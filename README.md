https://medium.com/sliit-foss/deploy-a-react-app-into-firebase-hosting-with-github-actions-d0cc1e6861b0
https://hackernoon.com/how-to-deploy-a-react-application-with-firebase-hosting-p92m37b7


https://www.youtube.com/watch?v=Bnd4IO3f2hU
create firebase project 

npm install -g  firebase-tools
firebase login
firebase projects:list
firebase init hosting
firebase deploy


firebase  init hosting


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC2nVUw0_HQP5tWC7AAqo1noASthyf4ik",
  authDomain: "savindupasintha-71dd8.firebaseapp.com",
  projectId: "savindupasintha-71dd8",
  storageBucket: "savindupasintha-71dd8.appspot.com",
  messagingSenderId: "783902469937",
  appId: "1:783902469937:web:f6b22d927b1f7bd1f20a10",
  measurementId: "G-HFLWP7F0FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReduxJavascript ES6React