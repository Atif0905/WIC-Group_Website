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
          <Link href={'/Bussiness'} className="desktop-item">Business</Link>
          <input type="checkbox" id="showMega"/>
          <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <Image src="/navbusiness.jpg" width={10} height={20} alt="err"/>
              </div>
              <h4 className=" text-dark mt-5 " >Innovation at your service</h4>
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
          <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <Image width={500} height={100} src="/navabout.jpg" alt=""/>
              </div>
              <h4 className=" text-dark mt-5 " >Building a Legacy of Trust</h4>
              <div className="row">
                <header>Explore About Us</header>
                <ul className="mega-links">
                  <li><Link className=" h6 mt-3 " href="./AboutPage/OneVission/OneVission">One Vision One Team</Link></li>
                  <li><Link className=" h6 mt-3 " href="./AboutPage/CEO/Ceo">CEO Message</Link></li>
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
          <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <Image src="/navconnect.jpg" width={700} height={100} alt="err"/>
              </div>
              <h4 className=" text-dark mt-5 " >Here to Serve, Ready to Listen</h4>
              <div className="row">
                <header>Connect with Us</header>
                <ul className="mega-links">
                  <li><Link className=" h6 mt-3 " href="/BookAnAppoinment">Book An Appointment</Link></li>
                  <li><Link className=" h6 mt-3 " href="/ConatctForQuery">Contact Query</Link></li>
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