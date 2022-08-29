import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import styles from '../styles'
import ButtonLogOut from "./ButtonLogOut";
import Button from "./Button";
import GoogleSignInButton from "./GoogleSignInButton";
import {home} from '../assets'
import { swing } from 'react-animations'

const Profile = () => {

    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
          const q = query(collection(db, "users"), where("uid", "==", user.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          console.log(data)
          setName(data.name);
          setPhotoURL(data.displaypic)
          setEmail(data.email)
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      };
    
      useEffect(() => {
        if (loading) return;
       // if (!user) return navigate("/");
        
         (user) && fetchUserName()
      }, [user, loading]);



  return (

    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <section className={`flex flex-col justify-top m-5 items-center h-screen `}>
            <img className={`w-[28px] h-[28px] object-contain cursor-pointer`} src={home} alt="home" onClick={() => navigate("/")}/>
            <h1 className={`font-poppins sm:text-[60px] text-[32px] text-gradient `}>Profile</h1>
            <img src={photoURL} className="rounded-full"/>
            <span className="font-poppins text-white">{name}</span>
            {(!user) && <GoogleSignInButton />}
            {(user) && <ButtonLogOut/>}
        </section>
      </div>
    </div>
    </div>
       
  
  )
}

export default Profile