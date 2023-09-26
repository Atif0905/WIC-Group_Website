'useclient'
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Query.module.css';
import Image from "next/Image";

const Query = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5a45trb', 'template_brcf6h3', form.current, 'XqbW7HmI2P6huDgPn')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
    };
  
  return (
    
  <div className={styles.maindiv}>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-12'>
          <Image src="/Logo.png" height={100} width={200} alt='logo'/> 
            <h6 className={styles.labeltxt}>Feel free to ask for details, don't save any questions!</h6>
  <form ref={form} onSubmit={sendEmail}>
  <div className={`${styles.formdiv1}`}>
  <div className={styles.formgroup}>
    <label className={` ${styles.labeltxt}`}>Full Name</label>
    <input type="text" name="to_name" className={`form-control ${styles.formcontrol}`} />
  </div>
  <div  className={styles.formgroup}>
    <label className={styles.labeltxt}>Email address</label>
    <input type="email" name="from_name" className={`form-control ${styles.formcontrol}`}/>
  </div>
 
  <div  className={styles.formgroup}>
    <label className={styles.labeltxt}>Subject</label>
    <select className={`form-control ${styles.formcontrol}`} >
      <option className={styles.labeltxt}>...</option>
      <option className={styles.labeltxt}>Option1</option>
      <option className={styles.labeltxt}>Option2</option>
      <option className={styles.labeltxt}>Option3</option>
      <option className={styles.labeltxt}>Option4</option>
    </select>
  </div>
  <div className={styles.formgroup}>
    <label className={styles.labeltxt}>Message</label>
    <textarea name="message" className={`form-control ${styles.formcontrol}`}  rows="5"></textarea>
  </div>
  <div className={styles.formgroup}>
  <button type="submit" className={`btn btn-primary ${styles.subbtn}`}>SEND MESSAGE</button>
  </div>
  </div>
</form>
       </div>
         
        <div className='col-lg-6 col-md-12 mt-5 '>
          <h5 className={styles.head5}>Get in Touch</h5>
          <p className={styles.paratxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus.</p>
          <h5  className={styles.head5}>Our Office</h5>
          <div className='d-flex'>
            <h6 className={styles.head6}>Address:</h6>
            <p className={styles.paratxt}>Sector-90, Bhutani Alphatum, 25th floor, Noida</p>
          </div>
          <div className='d-flex'>
            <h6 className={styles.head6}>Phone:</h6>
            <p className={styles.paratxt}>16554354942</p>
          </div>
          <div className='d-flex'>
            <h6 className={styles.head6}>Email:</h6>
            <p className={styles.paratxt}>abc@gmail.com</p>
          </div>
          <div className='d-lg-flex d-md-block'>
            <div className='p-2'>
            <Image className={styles.imgdiv} height={150} width={370} alt='con' src='/Connect Us Img/contactimg1.jpg'/></div>
            <div className='p-2'>
            <Image className={styles.imgdiv} height={150} width={370} alt='con' src='/Connect Us Img/contactimg2.jpg'/></div>
            <div className='p-2'>
            <Image className={styles.imgdiv} height={150} width={370} alt='con' src='/Connect Us Img/contactimg3.jpg'/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
  );
};

export default Query;
