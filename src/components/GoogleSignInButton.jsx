import React, { useEffect, useState }  from 'react'
import { useNavigate } from "react-router-dom"
import { auth, signInWithGoogle } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const GoogleSignInButton = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
  
    }, [user, loading]);

  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient
    font-poppins font-medium
   text-[18px] text-primary outline-none {styles} mt-5 rounded-[10px]`} onClick={signInWithGoogle}>
     Login
   </button>
  )
}

export default GoogleSignInButton