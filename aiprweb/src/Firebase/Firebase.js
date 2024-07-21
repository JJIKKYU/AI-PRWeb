// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCIDlYyy0i67UMxOM6W1A_5K18IoVIAt14",
    authDomain: "ai-prweb.firebaseapp.com",
    projectId: "ai-prweb",
    storageBucket: "ai-prweb.appspot.com",
    messagingSenderId: "143086048191",
    appId: "1:143086048191:web:e8dac4df3466890eec470a",
    measurementId: "G-GXW21K7R6E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, serverTimestamp, analytics };