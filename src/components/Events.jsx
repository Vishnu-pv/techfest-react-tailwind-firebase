import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import {  auth, db } from "../config/firebase";
import styles from '../styles'
import Navbar from './Navbar'
import { query, collection, getDocs, addDoc, where, Timestamp } from "firebase/firestore";


const Events = () => {



const [user, loading] = useAuthState(auth);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [photoURL, setPhotoURL] = useState("");
const navigate = useNavigate();
const [isAdmin, setisAdmin] = useState(false)
const [eventData, setEventData] = useState({});


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



const fetchEventsData = async () => {
  try {
    const q = query(collection(db, "events"));
    const doc = await getDocs(q);
    setEventData(doc.docs[0].data())
    console.log(eventData)

  } 
  catch (err) {
    console.error(err);
    alert("An error occured while fetching Events ");
  }
}

useEffect(() => {
  if (loading)
     return;

     if(!user)
      return navigate("/")

 fetchUserName()

 fetchEventsData()

 console.log(isAdmin)

}, [user, loading, isAdmin]);




  return (
    <table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>Event Name</th>
                    <th>Description</th>
                    <th>Prize</th>
                </tr>
            </thead>
 
            <tbody>
               
                    <tr>
                        <td></td>
                        
                    </tr>
               
            </tbody>
        </table>
  )

}

export default Events