import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import {  auth, db } from "../config/firebase";
import styles from '../styles'
import Navbar from './Navbar'
import { query, collection, getDocs, addDoc, where, Timestamp } from "firebase/firestore";
import { async, isAdmin } from "@firebase/util";

const EventForm = () => {

  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();
  const [isAdmin, setisAdmin] = useState(false)

  const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        console.log(data)
        setName(data.name);
        setPhotoURL(data.displaypic)
        setEmail(data.email)
        setisAdmin(data.isadmin)
        console.log(data.isadmin)
        if(!data.isadmin)
          return navigate("/")
      } 
      catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
  
    useEffect(() => {
      if (loading)
         return;

         if(!user)
          return navigate("/")

     fetchUserName()

     console.log(isAdmin)
     // 
   
  
    }, [user, loading, isAdmin]);


    const [eventName, setEventName] = useState(null);
    const [about, setAbout] = useState(null);
    const [participants, setParticipants] = useState(null);
    const [registrationAmount,setRegistrationAmount] = useState(null);
    const [prize, setPrize] = useState(null);
    const [phone,setPhone] = useState(null);  
    const [company,setCompany] = useState(null);  

    const handleInputChange = (e) => {

      const {id , value} = e.target;
      if(id === "eventName"){
        setEventName(value);
      }

      if(id === "about"){
        setAbout(value);
      }

      if(id === "participants"){
        setParticipants(value);
      }

      if(id === "registrationAmount"){
        setRegistrationAmount(value);
      }

      if(id === "prize"){
        setPrize(value);
      }

      if(id === "phone"){
        setPhone(value);
      }

      if(id === "company"){
        setCompany(value);
      }
    

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(eventName,about,registrationAmount,prize,phone,company,participants)
    try {
      await addDoc(collection(db, 'events'), {
        eventName: eventName,
        about: about,
        participants: participants,
        registrationAmount: registrationAmount,
        prize: prize,
        phone: phone,
        sponsors: company,
        created: Timestamp.now()
      })

      alert("Success")
   
    } catch (err) {
      alert(err)
    }
  }
 
  return (

    <div className={`${`bg-slate-900`} w-full overflow-hidden h-screen`}>
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar/>  
    </div>
  </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth} bg-gradient border border-sky-500 rounded ${styles.padding} mt-5`}>
      <h2 className={`${styles.heading2}`}>Add Event</h2>
    <form>
  <div className="relative z-0 mb-6 w-full group">
      <input value={eventName} onChange={(e) => handleInputChange(e)} type="eventname" name="floating_eventname" id="eventName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_eventname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event Name</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input value={about} onChange={(e) => handleInputChange(e)} type="about" name="floating_about" id="about" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_about" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">About</label>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <input value={participants} onChange={(e) => handleInputChange(e)} type="participants" name="floating_participants" id="participants" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_participants" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No. of Participants</label>
  </div>

  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input value={prize} onChange={(e) => handleInputChange(e)} type="text" name="floating_prize" id="prize" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_prize" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prize Money</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input value={registrationAmount} onChange={(e) => handleInputChange(e)} type="text" name="floating_registration_amount" id="registrationAmount" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_registration_amount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Registration Amount</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 mb-6 w-full group">
        <input value={phone} onChange={(e) => handleInputChange(e)} type="tel" pattern="[0-9]" name="floating_phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Coordinator Phone number</label>
    </div>
    <div className="relative z-0 mb-6 w-full group">
        <input value={company} onChange={(e) => handleInputChange(e)} type="text" name="floating_company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sponsors (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" className={`py-2 px-4 bg-blue-gradient z-10
     font-poppins font-medium
    text-[15px] text-primary outline-none {styles} mt-5 rounded-[10px]`} onClick={handleSubmit} >Submit</button>
</form>
</div>
</div>
</div>
  )
}

export default EventForm