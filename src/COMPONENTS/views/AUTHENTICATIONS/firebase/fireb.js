import {initializeApp} from 'firebase/app'
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAdZwh5LabTCUt73nWAjEsXsInKcAQ9jHg",
    authDomain: "project-2-6dae6.firebaseapp.com",
    projectId: "project-2-6dae6",
    storageBucket: "project-2-6dae6.appspot.com",
    messagingSenderId: "1067489557406",
    appId: "1:1067489557406:web:2f8dbf19f9be03f4a0f48f"
};

const firebaseApp = initializeApp(firebaseConfig)

export const authe = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider()
export const githubAuthProvider = new GithubAuthProvider()

export const db = getFirestore(firebaseApp)


