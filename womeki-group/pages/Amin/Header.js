import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import Link from 'next/link'

const Header = () => {
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
          credentials: 'include',
        }).then(response => {
          response.json().then(userInfo => {
            // setUserInfo(userInfo);
          });
        });
      }, []);
      function logout() {
        fetch('http://localhost:4000/logout', {
          credentials: 'include',
          method: 'POST',
        });
        setUserInfo(null);
      }
  return (
    <div >
        <div  className=' pt-5 header-backend ' >
          <div > <Link href="./AdminLogin">Login</Link></div>
          <div><Link href="./AdminUser">Register</Link></div>
       
            
            {/* <a onClick={logout} >Log-Out</a> */}
        </div>
    </div>
  )
}

export default Header