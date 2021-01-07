import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAeEzhRMV0rtnvhdxJPMOtTh9Ax0PFitLI",
    authDomain: "reablelanding.firebaseapp.com",
    projectId: "reablelanding",
    storageBucket: "reablelanding.appspot.com",
    messagingSenderId: "1001643673907",
    appId: "1:1001643673907:web:abb22e12440cfd44951646",
    measurementId: "G-JYQD6FVHXS"
});
if(!firebase.apps.length){
    firebase.initializeApp(firebaseApp)
}

var db =firebaseApp.firestore();

export {db};
