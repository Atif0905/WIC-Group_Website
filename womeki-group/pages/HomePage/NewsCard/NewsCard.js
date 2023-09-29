import React from "react";
import data from "./NewsCard.json";
import styles from "./NewsCard.module.css";
import Image from "next/Image";
import Link from "next/link";

const NewsCard = ({ title, cover, summary, createdAt, content }) => {
  return (
    <div>
      <div className={`container mt-5 ${styles.maindiv}`}>
        <div className="row">
          <div className="col-12 text-center">
            <Link href={"/News"}>
              <div>
                <Image
                  className={styles.newsimg}
                  height={300}
                  width={600}
                  src={"http://localhost:4000/" + cover}
                  alt="nn"
                />
                <h5 className={`mt-4 ${styles.newshead} `}>{title}</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
