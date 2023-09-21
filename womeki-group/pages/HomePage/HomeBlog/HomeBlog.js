import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from './HomeBlog.json'
import styles from './HomeBlog.module.css'
import Image from 'next/Image';

const HomeBlog = () => {
  useEffect(() => {
    AOS.init({
      disable: function() {
        let maxWidth = 768;
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
    <div className={`container mt-5 ${styles.homeblogmain} `}>
       <div className='row'>
        <h4 className={`mt-5 mb-5 ${styles.homeblogmainhead}`}>BLOG-SECTION</h4>
        {data.Section1.map((NewData) => {
            return(
              <div  className='col-lg-8 col-sm-12'>
              <div className={`card shadow rounded-0 border-0 ${styles.bloghomecard}`}>
                  <div className={`row d-flex`}>
                  <div data-aos="fade-right" data-aos-duration="2000" className={`col-md-6 col-sm-12`}>
                  <Image width={520} height={400} alt='bloghome' className={`card-img ${styles.blogcardimg}`} src={NewData.Image}/>
                  </div> 
                  <div className={`col-md-6 col-sm-12 p-4`}>
                  <h5 className={`card-title mt-2`}>{NewData.Heading}</h5>
                  <p className='card-text'>{NewData.Content}</p>
                  </div> 
                  </div>
              </div>
            </div>
            );
        })}

          {data.Section2.map((NewData) => {
            return(
              <div  className={`col-lg-8 col-sm-12 mt-3 ${styles.colsection2}`}>
              <div className={`card shadow rounded-0 border-0 ${styles.bloghomecard} `}>
                  <div className={`row d-flex`}> 
                  <div className={`col-md-6 col-sm-12 p-4`}>
                  <h5 className={`card-title mt-2`}>{NewData.Heading}</h5>
                  <p className='card-text'>{NewData.Content}</p>
                  </div> 
                  <div data-aos="fade-left"  data-aos-duration="2000" className={`col-md-6 col-sm-12`}>
                  <Image width={520} height={400} alt='bloghome' className={`card-img ${styles.blogcardimg} `} src={NewData.Image}/>
                  </div>
                  </div>
              </div>
            </div>
            );
          })}
        </div>
      
        </div>
    
       
    
  )
}

export default HomeBlog