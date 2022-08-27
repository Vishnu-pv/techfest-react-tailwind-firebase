import React from 'react'
import { logout } from "../config/firebase";

const ButtonLogOut = () => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient
     font-poppins font-medium
    text-[18px] text-primary outline-none {styles} mt-5 rounded-[10px]`} onClick={logout}>
      Log Out
    </button>
  )
}

export default ButtonLogOut