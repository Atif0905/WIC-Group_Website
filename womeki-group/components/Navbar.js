import Image from "next/Image";
import img from "../public/Logo.png";

const Navbar = () => {
  return (
  <div>
    <nav>
    <div className="wrapper">
      <div className="logo"><a href="/">
        <Image src={img} alt="ll" width={140} height={80} />
        </a></div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul className="nav-links">
        <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
        <li>
          <a href="#" className="desktop-item">Business</a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src="https://www.adani.com/-/media/Project/Adani/Blog/Dharavi-Oped-Image-min.jpg" alt=""/>
              </div>
              <h2 className=" text-dark mt-5 " >Explore with us</h2>
              <div className="row">
                <header>Sectors</header>
                <ul className="mega-links">
                  <li><a href="#">Real Estate</a></li>
                  <li><a className=" h6 " href="# ">Information Technology</a></li>
                  <li><a href="#">Education</a></li>
                </ul>
              </div>
              <div className="row">
                <header>Companies</header>
                <ul className="mega-links">
                  <li><a className=" h6 " href="#">Womeki Investors Club</a></li>
                  <li><a className=" h6 " href="#">Womeki Tech Solution</a></li>
                  <li><a href="#">MC Gopichand</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="about" className="desktop-item">About</a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src="https://www.adani.com/-/media/Project/Adani/Blog/Dharavi-Oped-Image-min.jpg" alt=""/>
              </div>
              <h2 className=" text-dark mt-5 " >Explore About Us</h2>
              <div className="row">
                <header>Explore About Us</header>
                <ul className="mega-links">
                  <li><a className=" h6 mt-3 " href="./AboutPage/OneVission/OneVission">One Vision One Team</a></li>
                  <li><a className=" h6 mt-3 " href="./AboutPage/CEO/Ceo">CEO's Message</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a href="#" className="desktop-item">Careers</a>
        </li>
        <li><a href="#">News</a></li>
        <li>
          <a href="#" className="desktop-item">Connect</a>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <img src="https://www.adani.com/-/media/Project/Adani/Blog/Dharavi-Oped-Image-min.jpg" alt=""/>
              </div>
              <h2 className=" text-dark mt-5 " >Talk To Us</h2>
              <div className="row">
                <header>Explore About Us</header>
                <ul className="mega-links">
                  <li><a className=" h6 mt-3 " href="#">Book An Appointment</a></li>
                  <li><a className=" h6 mt-3 " href="# ">Contact For Query</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>      
      <label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
    </div>
    </nav>
  </div>
  )
};

export default Navbar;
