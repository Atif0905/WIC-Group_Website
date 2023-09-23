import React from "react";
import styles from "./Footer.module.css";
import Image from "next/Image";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="fluid ">
          <div className="container">
            <div className="row">
              <div className="col-md-2 d-none d-md-block">
                <h5 className={`mb-3 ${styles.foothead}`}>Business</h5>
                <ul className="list-unstyled text-black">
                  <li>
                    <a href="#" className={styles.foottext}>
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Financial Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Tourism & Travel
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Telcom & Media
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Trading & Investment
                    </a>
                  </li>
                </ul>
                <h5 className={`mb-3 ${styles.foothead}`}>Our brands</h5>
              </div>
              <div className="col-md-2 d-none d-md-block">
                <h5 className={`mb-3 ${styles.foothead}`}>Community</h5>
                <ul className="list-unstyled text-black">
                  <li>
                    <a href="#" className={styles.foottext}>
                      Health
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Empowerment
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Environment
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 d-none d-md-block">
                <h5 className={`mb-3 ${styles.foothead}`}>About</h5>
                <ul className="list-unstyled text-black">
                  <li>
                    <a href="#" className={styles.foottext}>
                      Womeki group
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Values and Purpose
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Leadership
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Heritage
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Innovation
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Sponsorships
                    </a>
                  </li>
                  <li>
                    <a href="#" className={styles.foottext}>
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 d-none d-md-block">
                <h6 className={`mb-3 ${styles.foothead}`}>Newsroom</h6>
                <h6 className={`mb-3 ${styles.foothead}`}>Careers</h6>
                <h6 className={`mb-3 ${styles.foothead}`}>Jobs</h6>
                <div className="mt-5">
                  <h6 className={`mb-3 ${styles.foothead}`}>
                     Opportunity
                  </h6>
                  <h6 className={`mb-3 ${styles.foothead}`}>Privacy Policy</h6>
                  <h6 className={`mb-3 ${styles.foothead}`}>
                    Legal Disclaimer
                  </h6>
                  <a href="./Amin/Header">
                    <h6 className={`mb-3 ${styles.foothead}`}>Admin Login</h6>
                  </a>
                </div>
              </div>
              <div className="col-md-4  col-sm-12 justify-content-center">
                <div className="footer-icons d-flex justify-content-center">
                  <a
                    href="https://www.facebook.com/womekiinvestorsclub"
                  >
                    <Image
                      alt="er"
                      height={20}
                      width={20}
                      className={styles.footicon}
                      src="/icons8-facebook-24.png"
                    />
                  </a>
                  <a
                    className="ms-4"
                    href="https://www.instagram.com/womekiinvestorsclub/"
                  >
                    <Image
                      alt="er"
                      height={20}
                      width={20}
                      className={styles.footicon}
                      src="/icons8-instagram-24.png"
                    />
                  </a>
                  <a
                    className="ms-4"
                    href="https://www.linkedin.com/company/womeki-investors-club-wic/"
                  >
                    <Image
                      height={20}
                      width={20}
                      alt="er"
                      className={styles.footicon}
                      src="/icons8-linkedin-24.png"
                    />
                  </a>
                  <a
                    className="ms-4"
                    href=" https://twitter.com/wicdotin?t=zHgR8m2u9Q4qH63z5ao-Sw&s=08"
                  >
                    <Image
                      height={20}
                      width={20}
                      alt="er"
                      className={styles.footicon}
                      src="/icons8-twitter-24.png"
                    />
                  </a>
                  <a className="ms-4" href="">
                    <Image
                      height={20}
                      width={20}
                      alt="er"
                      className={styles.footicon}
                      src="/icons8-mail-24.png"
                    />
                  </a>
                  <a
                    className="ms-4"
                    href="https://www.youtube.com/results?search_query=womeki+investors+club"
                  >
                    <Image
                      height={20}
                      width={20}
                      alt="er"
                      className={styles.footicon}
                      src="/icons8-youtube-24.png"
                    />
                  </a>
                </div>
                <div className="form-outline form-black mt-5 d-flex justify-content-center">
                  <input
                    type="email"
                    className={styles.formfooter}
                    placeholder="Enter your email ID to subscribe"
                  />
                  <button type="submit" className={styles.footerbtn}>
                    <Image
                      height={15}
                      width={15}
                      alt="er"
                      className={styles.arrowbtn}
                      src="/arrow-right.svg"
                    />
                  </button>
                </div>

                <div className="d-flex d-md-none justify-content-center mt-5">
                  <h6 className={`m-2 ${styles.foothead1}`}>Jobs</h6>
                  <h6 className={`m-2 ${styles.foothead1}`}>
                    Opportunity
                  </h6>
                  <h6 className={`m-2 ${styles.foothead}`}>Privacy Policy</h6>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <div>
                    <a href="./Amin/Header">
                      <Image
                        height={110}
                        width={200}
                        className={styles.wiclogo}
                        src="/Logo.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
