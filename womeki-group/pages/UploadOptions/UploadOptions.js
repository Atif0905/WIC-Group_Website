import React from "react";
import Link from "next/link";
import styles from '../Amin/Admin.module.css'


const UploadOptions = () => {
  return (
    <div className=" d-flex ms-5 mt-5" >
        <a className={styles.button90} href="./Upload">Update News</a>
      <a className={`ms-5 ${styles.button90}`} href="./Upload">Upload Blogs</a>
    </div>
  );
};

export default UploadOptions;
