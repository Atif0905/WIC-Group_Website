import React from "react";
import styles from "./WomekiTechSol.module.css";
import Image from "next/Image";

const WomekiTechSol = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.content}>
        <h1 className={styles.headline}>We are launching soon !</h1>
      </div>
      <div className={styles.contentImg}>
        <Image
          width={120}
          height={120}
          src={'/rocket.png'}
          className={styles.rocket}
          alt="p"
        />
      </div>
    </div>
  );
};

export default WomekiTechSol;
