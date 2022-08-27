// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"
import {
getFirestore,
query,
getDocs,
collection,
where,
addDoc }
from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCdpl8P_A__SPrjKwV1Lo_n0vkQIi2CpZc",
  authDomain: "techfest-react.firebaseapp.com",
  projectId: "techfest-react",
  storageBucket: "techfest-react.appspot.com",
  messagingSenderId: "892537971484",
  appId: "1:892537971484:web:2ec8a44982879a3c23d0d9",
  measurementId: "G-1B22PRL6MD"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)


const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, "users"), where("uid", "==", user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        displaypic: user.photoURL
      })
    }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const logout = () => {
    signOut(auth)
    window.location.reload()
    
  }

  
  export {
    auth,
    db,
    signInWithGoogle,
    logout,
  }