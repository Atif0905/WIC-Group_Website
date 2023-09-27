import Image from "next/Image";
import img from "../public/Logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
  <div className=" nav-div-main" >
    <nav>
    <div className="wrapper">
      <div className="logo"><Link href={'/'}>
        <Image src={img} alt="ll" width={140} height={80} />
        </Link></div>
      <input type="radio" name="slider" id="menu-btn"/>
      <input type="radio" name="slider" id="close-btn"/>
      <ul className="nav-links">
        <label for="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
        <li>
          <Link href={'/Bussiness'} className="desktop-item">Business</Link>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                {/* <img src="https://www.adani.com/-/media/Project/Adani/Blog/Dharavi-Oped-Image-min.jpg" alt=""/> */}
                <Image src={'/connected-1327191_1280.jpg'} width={500} height={100} alt="err"/>
              </div>
              <h2 className=" text-dark mt-5 " >Explore with us</h2>
              <div className="row">
                <header>Sectors</header>
                <ul className="mega-links">
                  <li><Link href={'/Business/BusinessRealestate/BusinessRealestate'}>Real Estate</Link></li>
                  <li><Link className=" h6 " href={'/Business/BusinessTech/BusinessTech'}>Information Technology</Link></li>
                  <li><Link href={'/Business/BusinessEducation/BusinessEducation'}>Education</Link></li>
                </ul>
              </div>
              <div className="row">
                <header>Companies</header>
                <ul className="mega-links">
                  <li><Link className=" h6 " href={'https://www.wic.org.in'}>Womeki Investors Club</Link></li>
                  <li><Link className=" h6 " href={'/WomekiTechSol/WomekiTechSol'}>Womeki Tech Solution</Link></li>
                  <li><Link href={'https://www.mcgopichand.org'}>MC Gopichand</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="about" className="desktop-item">About</Link>
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
                  <li><Link className=" h6 mt-3 " href="./AboutPage/OneVission/OneVission">One Vision One Team</Link></li>
                  <li><Link className=" h6 mt-3 " href="./AboutPage/CEO/Ceo">CEO's Message</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="/Blogs">Blog</Link>
        </li>
        <li>
          <Link href="/Career" className="desktop-item">Careers</Link>
        </li>
        <li><Link href="/News">News</Link></li>
        <li>
          <Link href="contact" className="desktop-item">Connect</Link>
          <input type="checkbox" id="showMega"/>
          <label for="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                {/* <img src="https://www.adani.com/-/media/Project/Adani/Blog/Dharavi-Oped-Image-min.jpg" alt=""/> */}
                <Image src={'/connected-1327191_1280.jpg'} width={700} height={100} alt="err"/>
              </div>
              <h2 className=" text-dark mt-5 " >Talk To Us</h2>
              <div className="row">
                <header>Explore About Us</header>
                <ul className="mega-links">
                  <li><Link className=" h6 mt-3 " href="/BookAnAppoinment">Book An Appointment</Link></li>
                  <li><Link className=" h6 mt-3 " href="/ConatctForQuery">Contact For Query</Link></li>
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