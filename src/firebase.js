import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_sLqjSouGVK2B51qRSCFdd4aXrJW9nSU",
    authDomain: "linkedin-clone-8e93f.firebaseapp.com",
    projectId: "linkedin-clone-8e93f",
    storageBucket: "linkedin-clone-8e93f.appspot.com",
    messagingSenderId: "110936928949",
    appId: "1:110936928949:web:8fe9fc8f3840c09061c4fc",
    measurementId: "G-C7WWD5EL9W"
};

// init app
const firebaseApp = firebase.initializeApp(firebaseConfig)
// grab firestore
const db = firebaseApp.firestore();
// get auth ready 
const auth = firebase.auth()

// export db, auth so react component can use it 
export { db, auth }