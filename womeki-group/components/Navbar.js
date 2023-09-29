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
        <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
        <li>
          <Link href={'/Bussiness'} >
            <a className="desktop-item">Business</a>
            </Link>  
          <input type="checkbox" id="showBusiness"/>
          <label htmlFor="showBusiness" className="mobile-item">Business</label>
          <div className="mega-box">
            <div className="content">
              <div className=" d-flex">
                <Image src="/navbusiness.jpg" width={250} height={80} alt="err"/>
                <h4 className=" businesshead ms-2 " >Innovation at your service</h4>
              </div>

              <div className="row">
                <header>Sectors</header>
                <ul className="mega-links navtext">
                  <li><Link href={'/Business/BusinessRealestate/BusinessRealestate'}>Real Estate</Link></li>
                  <li><Link href={'/Business/BusinessTech/BusinessTech'}>Information Technology</Link></li>
                  <li><Link href={'/Business/BusinessEducation/BusinessEducation'}>Education</Link></li>
                </ul>
              </div>
              <div className="row">
                <header>Companies</header>
                <ul className="mega-links">
                  <li><Link  href={'https://www.wic.org.in'}>Womeki Investors Club</Link></li>
                  <li><Link  href={'/WomekiTechSol/WomekiTechSol'}>Womeki Tech Solution</Link></li>
                  <li><Link href={'https://www.mcgopichand.org'}>MC Gopichand</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="about" >
            <a className="desktop-item">About</a>
          </Link>
          <input type="checkbox" id="showAbout"/>
          <label htmlFor="showAbout" className="mobile-item">About</label>
          <div className="mega-box">
            <div className="content">
              <div className="d-flex">
                <Image width={300} height={100} src="/navabout.jpg" alt=""/>
                <h4 className=" abouthead ms-2 " >Building a Legacy of Trust</h4>
              </div>
             
              <div className="row">
                <header>Explore About Us</header>
                <ul className="mega-links">
                  <li><Link href="./AboutPage/OneVission/OneVission">One Vision One Team</Link></li>
                  <li><Link href="./AboutPage/CEO/Ceo">CEO Message</Link></li>
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
          <Link href="contact"><a  className="desktop-item">Connect</a></Link>
          <input type="checkbox" id="showConnect"/>
          <label htmlFor="showConnect" className="mobile-item">Connect</label>
          <div className="mega-box">
            <div className="content">
              <div className="d-flex">
                <Image src="/navconnect.jpg" width={300} height={100} alt="err"/>
                <h4 className=" connecthead ms-2 " >Here to Serve, Ready to Listen</h4>
              </div>
        
              <div className="row">
                <header>Connect with Us</header>
                <ul className="mega-links">
                  <li><Link href="/BookAnAppoinment">Book An Appointment</Link></li>
                  <li><Link href="/ConatctForQuery">Contact Query</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>      
      <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
    </div>
    </nav>
  </div>
  )
};
export default Navbar;