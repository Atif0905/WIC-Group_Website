import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Aboutcard.module.css'
import data from './Aboutcard.json'
import Image from 'next/Image';

const Aboutcard = () => {
  useEffect(() => {
    AOS.init({
      disable: function() {
        let maxWidth = 767;
        let minWidth = 320;
        return window.innerWidth <= maxWidth && window.innerWidth >= minWidth;
      }
    });
    window.addEventListener('resize', () => {
      AOS.refresh();
    });
    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
}, []);
  return (
    <div>
    <div>
        <h4 className={`text-center ${styles.AboutSectionMainHeading}`}>
          ABOUT
        </h4>
      </div>
    
    <div className='container mt-5'>
      <div className='row'>

        {data.Section1.map((NewData,index) => {
          return(
        <div key={index} data-aos="fade-up" data-aos-duration="2000" className={`col-lg-4 col-sm-12 shadow p-4 ${styles.card1}`}>
        <h4 className={`mt-2 ${styles.aboutcardhead}`}>{NewData.Heading}</h4>
        <p className={`mt-4 ${styles.aboutcardcontent}`}>{NewData.Content}</p>
        </div>
        );
        })}
        {data.Section2.map((NewData,index) => {
          return(
        <div key={index} className={`col-lg-4 col-md-6 col-sm-12  ${styles.card2}`}>
              <Image width={400} height={500} alt='gt' src={NewData.Image}/>
              </div>
          );
        })}
        {data.Section3.map((NewData,index) => {
          return(
             <div key={index}  data-aos="fade-up"  data-aos-duration="2000"  className={`col-lg-4 col-md-6 col-sm-12 shadow p-4 ${styles.card3}`}>
              <h4 className={`mt-2 ${styles.aboutcardhead}`}>{NewData.Heading}</h4>
              <p className={`mt-4 ${styles.aboutcardcontent}`}>{NewData.Content}</p>
              </div>
          );
        })}
      </div>
    </div>
    </div>
  )
}

export default Aboutcard
