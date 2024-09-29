import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKl9BspVKMDJMNxTzXrrBTODYrHy92iv0",

    authDomain: "lms-sdkudangan2.firebaseapp.com",

    projectId: "lms-sdkudangan2",

    storageBucket: "lms-sdkudangan2.appspot.com",

    messagingSenderId: "138620497711",

    appId: "1:138620497711:web:b74df6326015c47b0c3bda"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
