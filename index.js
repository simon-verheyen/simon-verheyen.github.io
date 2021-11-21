import { initializeApp } from 'firebase/app';
import { doc, getFirestore, collection, getDoc, getDocs, setDoc } from "firebase/firestore";


const firebaseApp = initializeApp( {
    apiKey: "AIzaSyCtmYIJiWvWyKu4Fa2KTkJi3H16XWJSzLo",
    authDomain: "majicom-ea4a2.firebaseapp.com",
    databaseURL: "https://majicom-ea4a2.firebaseio.com",
    projectId: "majicom-ea4a2",
    storageBucket: "majicom-ea4a2.appspot.com",
    messagingSenderId: "87041209812",
    appId: "1:87041209812:web:735863b942ef0b56521241",
    measurementId: "G-3Z1LJHBVE3"
});

const db = getFirestore(firebaseApp);

const kiosk01 = doc(db, 'kiosks/01');
const kiosk05 = doc(db, 'kiosks/05');
function writeSomething() {
    const docData = {
        description: 'test',
        price: 3.99,
        milk: 'while',
        vegan: false,
    };
    setDoc(kiosk01, kiosk05.data())
}

async function reaDoc() {
    const snapshot = await getDoc(kiosks);
    if (snapshot.exists()) {
        const docDta = snapshot.data();
        Console.log('data is ${JSON.stringify(docDta)}');
    }
};

console.log('hello, firestore!');
//reaDoc();
