import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCbcS4-OTxkZzcBD0ubXkm-dGrJdtRtZs",
    authDomain: "curricular-degree.firebaseapp.com",
    databaseURL: "https://curricular-degree.firebaseio.com/",
    projectId: "curricular-degree",
    storageBucket: "curricular-degree.appspot.com",
    messagingSenderId: "780675418253",
    appId: "1:780675418253:web:b5abf0c57ffca8ebacbac4",
    measurementId: "G-6D7P9RNV89",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
