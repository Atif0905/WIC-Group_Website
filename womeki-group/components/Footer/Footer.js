import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-lg-2 d-none d-lg-block'>
                    <h6 className='mb-3'>Business</h6>
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
                    <h6 className='mb-3'>Browse our brands</h6>
                </div>
                <div className='col-lg-2 d-none d-lg-block'>
                    <h6 className='mb-3'>Community</h6>
                    <ul className='list-unstyled text-black'>
                    <li><a href="#" className={styles.foottext}>Health</a></li>
                        <li><a href="#" className={styles.foottext}>Education</a></li>
                        <li><a href="#" className={styles.foottext}>Empowerment</a></li>
                        <li><a href="#" className={styles.foottext}>Environment</a></li>
                    </ul>
                </div>
                <div className='col-lg-2 d-none d-lg-block'>
                    <h6 className='mb-3'>About</h6>
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
                    <h6 className='mb-3'>Newsroom</h6>
                    <h6 className='mb-3'>Careers</h6>
                    <h6 className='mb-3'>Jobs</h6>
                    <div className='mt-5'>
                    <h6 className='mb-3'>Equal Opportunity</h6>
                    <h6 className='mb-3'>Privacy Policy</h6>
                    <h6 className='mb-3'>Legal Disclaimer</h6>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12 justify-content-center'>
                    <div className='footer-icons d-flex justify-content-center'>
                    <a href='https://www.facebook.com/womekiinvestorsclub'>
                    <img className={styles.footicon} src="/fb.png"/>
                    </a>
                    <a href='https://www.instagram.com/womekiinvestorsclub/'>
                    <img className={styles.footicon} src="/insta.png"/>
                    </a>
                    <a href='https://www.linkedin.com/company/womeki-investors-club-wic/'>
                    <img className={styles.footicon} src="/linkdin.png"/>
                    </a>
                    <a href=' https://twitter.com/wicdotin?t=zHgR8m2u9Q4qH63z5ao-Sw&s=08'>
                    <img className={styles.footicon} src="/twitter.png"/>
                    </a>
                    <a href=''>
                    <img className={styles.footicon} src="/mail.png"/>
                    </a>
                    <a href='https://www.youtube.com/results?search_query=womeki+investors+club'>
                    <img className={styles.footicon} src="youtube.svg"/>
                    </a>
                    </div>
                    <div className='form-outline form-black mt-4 d-flex justify-content-center'>
                    <input type="email" className={styles.formfooter} placeholder="Enter your email ID to subscribe"/>
                    <button type="submit" className={styles.footerbtn}>
                        <img className={styles.arrowbtn} src='/right-arrow.jpg'></img>
                    </button>
                    </div> 
                  
            
                    <div className='d-flex d-lg-none justify-content-center mt-5' >
                    <h6 className={`m-2 ${styles.foottext}`}>Jobs</h6>
                    <h6 className={`m-2 ${styles.foottext}`}>Equal Opportunity</h6>
                    <h6 className={`m-2 ${styles.foottext}`}>Privacy Policy</h6>
                    </div>
                
                    <div className='col-md-12 d-none d-lg-block justify-content-center p-5'>
                    <img className={styles.wiclogo} src="/womeki.jpeg"/>
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