import React, { useState } from "react";
import data from "./AboutUs.json";
import styles from "./AboutUs.module.css";
import Image from "next/Image";
import img from "../../public/SlideDown.png";
import img1 from "../../public/SlideUp.png";

const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div>
    //   {data.Section1.map((AboutData) => {
    //     return (
    //       <div className="bg-about">
    //         <div className="about-img">
    //           <Image
    //             src={AboutData.Image}
    //             alt="img"
    //             height={600}
    //             width={1500}
    //           />
    //         </div>

    //         <h3 className={styles.bgImgText}>{AboutData.Heading}</h3>
    //       </div>
    //     );
    //   })}
    //   {data.Section2.map((AboutData1) => {
    //     const [displayText, setDisplayText] = useState(false);
        
    //     const handleButtonClick = () => {
    //         setDisplayText(!displayText);
    //     };
        
    //     return (
    //       <div className="container mt-5">
    //         <div className="row">
    //           <h3 className={styles.AboutHeading}>{AboutData1.Heading}</h3>
    //           <p>{AboutData1.Content1}</p>
    //         </div>
    //         <div className="row">
    //           <p className=" text-center " onClick={handleButtonClick}>
    //             Read more <Image  src={img} alt="img" height={15} width={15} />
    //           </p>
    //           <p>{displayText}</p>
    //           {/* <p className=" text-center " onClick={handleButtonClick}>

    //             Read more <Image  src={img1} alt="img" height={15} width={15} />
                
    //           </p> */}
    //           {displayText && <div>dsfwdf</div>}
    //         </div>
    //       </div>
    //     );
    //   })}
     
    // </div>
    <>
    <div >
      <button onClick={toggleAccordion}>Toggle Accordion</button>
      {isOpen && <div className={styles.accordioncontent}>This is the content of the accordion.</div>}
    </div>
    </>
  );
};

export default AboutUs;
