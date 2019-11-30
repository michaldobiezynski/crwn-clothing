import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIkCNbFyGXw8zfp858gUAe_bfgxXfBQsk",
    authDomain: "crwn-db-6c356.firebaseapp.com",
    databaseURL: "https://crwn-db-6c356.firebaseio.com",
    projectId: "crwn-db-6c356",
    storageBucket: "crwn-db-6c356.appspot.com",
    messagingSenderId: "521289046685",
    appId: "1:521289046685:web:7689c675b4eb0d0da11274",
    measurementId: "G-82SNPXGT6H"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

