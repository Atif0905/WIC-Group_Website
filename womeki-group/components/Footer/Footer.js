import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/Image';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-lg-2 d-none d-lg-block'>
                <h6 className={`mb-3 ${styles.foothead}`}>Business</h6>
                    <ul className='list-unstyled text-black'>
                        <li><a href="#" className={styles.foottext}>Technology</a></li>
                        <li><a href="#" className={styles.foottext}>Steel</a></li>
                        <li><a href="#" className={styles.foottext}>Automotive</a></li>
                        <li><a href="#" className={styles.foottext}>Consumer & Retail</a></li>
                        <li><a href="#" className={styles.foottext}>Infrastructure</a></li>
                        <li><a href="#" className={styles.foottext}>Financial Services</a></li>
                        <li><a href="#" className={styles.foottext}>Aerospace & Defence</a></li>
                        <li><a href="#" className={styles.foottext}>Tourism & Travel</a></li>
                        <li><a href="#" className={styles.foottext}>Telcom & Media</a></li>
                        <li><a href="#" className={styles.foottext}>Trading & Investment</a></li>
                    </ul>
                    <h6 className={`mb-3 ${styles.foothead}`}>Browse our brands</h6>
                </div>
                <div className='col-lg-2 d-none d-lg-block'>
                <h6 className={`mb-3 ${styles.foothead}`}>Community</h6>
                    <ul className='list-unstyled text-black'>
                    <li><a href="#" className={styles.foottext}>Health</a></li>
                        <li><a href="#" className={styles.foottext}>Education</a></li>
                        <li><a href="#" className={styles.foottext}>Empowerment</a></li>
                        <li><a href="#" className={styles.foottext}>Environment</a></li>
                    </ul>
                </div>
                <div className='col-lg-2 d-none d-lg-block'>
                <h6 className={`mb-3 ${styles.foothead}`}>About</h6>
                    <ul className='list-unstyled text-black'>
                    <li><a href="#" className={styles.foottext}>The Tata group</a></li>
                        <li><a href="#" className={styles.foottext}>Tata Sons</a></li>
                        <li><a href="#" className={styles.foottext}>Values and Purpose</a></li>
                        <li><a href="#" className={styles.foottext}>Leadership</a></li>
                        <li><a href="#" className={styles.foottext}>Heritage</a></li>
                        <li><a href="#" className={styles.foottext}>Sustainability</a></li>
                        <li><a href="#" className={styles.foottext}>Innovation</a></li>
                        <li><a href="#" className={styles.foottext}>Sponsorships</a></li>
                        <li><a href="#" className={styles.foottext}>Investors</a></li>
                        <li><a href="#" className={styles.foottext}>Tata Code of Conducte</a></li>
                    </ul>
                </div>
                <div className='col-lg-2 d-none d-lg-block'>
                <h6 className={`mb-3 ${styles.foothead}`}>Newsroom</h6>
                <h6 className={`mb-3 ${styles.foothead}`}>Careers</h6>
                <h6 className={`mb-3 ${styles.foothead}`}>Jobs</h6>
                    <div className='mt-5'>
                    <h6 className={`mb-3 ${styles.foothead}`}>Equal Opportunity</h6>
                    <h6 className={`mb-3 ${styles.foothead}`}>Privacy Policy</h6>
                    <h6 className={`mb-3 ${styles.foothead}`}>Legal Disclaimer</h6>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12 justify-content-center'>
                    <div className='footer-icons d-flex justify-content-center'>
                    <a className='ms-3'  href='https://www.facebook.com/womekiinvestorsclub'>
                    <Image alt='er' height={15} width={15} className={styles.footicon} src="/fb.png"/>
                    </a>
                    <a className='ms-3' href='https://www.instagram.com/womekiinvestorsclub/'>
                    <Image alt='er' height={15} width={15} className={styles.footicon} src="/insta.png"/>
                    </a>
                    <a className='ms-3' href='https://www.linkedin.com/company/womeki-investors-club-wic/'>
                    <Image height={15} width={15} alt='er' className={styles.footicon} src="/linkdin.png"/>
                    </a>
                    <a className='ms-3' href=' https://twitter.com/wicdotin?t=zHgR8m2u9Q4qH63z5ao-Sw&s=08'>
                    <Image height={15} width={15} alt='er' className={styles.footicon} src="/twitter.png"/>
                    </a>
                    <a className='ms-3' href=''>
                    <Image height={15} width={15} alt='er' className={styles.footicon} src="/mail.png"/>
                    </a>
                    <a className='ms-3' href='https://www.youtube.com/results?search_query=womeki+investors+club'>
                    <Image height={15} width={15} alt='er' className={styles.footicon} src="/youtube.svg"/>
                    </a>
                    </div>
                    <div className='form-outline form-black mt-4 d-flex justify-content-center'>
                    <input type="email" className={styles.formfooter} placeholder="Enter your email ID to subscribe"/>
                    <button type="submit" className={styles.footerbtn}>
                        <Image height={15} width={15} alt='er' className={styles.arrowbtn} src='/arrow-right.svg'/>
                    </button>
                    </div> 
                  
            
                    <div className='d-flex d-lg-none justify-content-center mt-5' >
                    <h6 className={`m-2 ${styles.foothead}`}>Jobs</h6>
                    <h6 className={`m-2 ${styles.foothead}`}>Equal Opportunity</h6>
                    <h6 className={`m-2 ${styles.foothead}`}>Privacy Policy</h6>
                    </div>
                
                    <div className='col-md-12 d-none d-lg-block justify-content-center p-5'>
                    <div>
                        <a href='./Amin/Header' >
                    <Image height={200} width={300} className={styles.wiclogo} src="/womeki.jpeg"/>
                    </a>
                    </div>
                    </div> 
                </div>               
            </div>
        </div>
        <div className={` row d-lg-none justify-content-center mt-4 ${styles.footerbottom}`}>
        <img className={styles.womekilogo} src="/womeki.jpeg"/>
        </div>
    </div>
  )
}

export default Footer