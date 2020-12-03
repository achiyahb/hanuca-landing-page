
import firebase from 'firebase/app';
import 'firebase/database'


console.log(process.env.VUE_APP_databaseURL)
    // Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: 'process.env.authDomain',
    databaseURL: 'https://market-tracker-front.firebaseio.com',
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    });


export default {
    firebase
}
