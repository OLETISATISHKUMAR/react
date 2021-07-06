import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCTdj0-RWNtw9lIVlqJAFrs-2dz-pL66vk",
  authDomain: "prakruti-e48e4.firebaseapp.com",
  projectId: "prakruti-e48e4",
  storageBucket: "prakruti-e48e4.appspot.com",
  messagingSenderId: "96653735664",
  appId: "1:96653735664:web:ade88bd8283adb2249f435",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
