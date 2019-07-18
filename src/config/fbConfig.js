import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize firebase
var config = {
    apiKey: "AIzaSyAetjcBffrzyUn6rkibHNCgMB2YAJfUSIQ",
    authDomain: "joblist-479f2.firebaseapp.com",
    databaseURL: "https://joblist-479f2.firebaseio.com",
    projectId: "joblist-479f2",
    storageBucket: "joblist-479f2.appspot.com",
    messagingSenderId: "560017744962"
}

firebase.initializeApp(config);

export default firebase