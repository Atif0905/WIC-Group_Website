import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Link from "next/link";
import styles from "./Admin.module.css";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        // setUserInfo(userInfo);
      });
    });
  }, []);
  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  return (
    <div>
      <div className={`container ${styles.AdminContainer}`}>
        <div className="row">
          <div className={`col-12 text-center`}>
            <a className={`p-1 ${styles.Explorebtn}`} href="./AdminLogin">
              Login
            </a>
          </div>
          <div className={`col-12 text-center mt-5`}>
            <a className={`p-1 ${styles.Explorebtn}`} href="./AdminUser">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
