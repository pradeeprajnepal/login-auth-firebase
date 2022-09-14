import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD8EyLP0BuI4u5r7LPzOu9TM46IY0v7KDA",
    authDomain: "firstloginauth.firebaseapp.com",
    projectId: "firstloginauth",
    storageBucket: "firstloginauth.appspot.com",
    messagingSenderId: "714033004613",
    appId: "1:714033004613:web:7fe60aadcbe8cbd991632c"
}

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);


export {auth}