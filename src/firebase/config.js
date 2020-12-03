
import firebase from 'firebase/app';
import 'firebase/database'


console.log(process.env.VUE_APP_databaseURL)
    // Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyBBmW8fpRRq_TLWEjBfzyPquSE58FtUtxc",
    authDomain: "hanuka-landing-page.firebaseapp.com",
    databaseURL: "https://hanuka-landing-page.firebaseio.com",
    projectId: "hanuka-landing-page",
    storageBucket: "hanuka-landing-page.appspot.com",
    messagingSenderId: "333578344406",
    appId: "1:333578344406:web:e69af906c70b7f1532f677"
    });


export default {
    firebase
}
