import React, { useEffect, useState } from "react";
import Carousel from "./HomePage/Carousel/Carousel";
import Aboutcard from "./HomePage/AboutCard/Aboutcard";
import Buisness_Card from "./HomePage/Buisness/Buisness_Card";
import NewsCard from "./HomePage/NewsCard/NewsCard";
import Sustainability from "./HomePage/Sustainability/Sustainability";
import HomeBlog from "./HomePage/HomeBlog/HomeBlog";
import OurCommitment from "./HomePage/OurCommitment/OurCommitment";
import Sustainability2 from "./HomePage/Sustainability2/Sustainability2";
import LatestNews from "./HomePage/NewsCard/LatestNews";
import FeaturedNews from "./HomePage/NewsCard/FeaturedNews";
import styles from "./HomePage/NewsCard/NewsCard.module.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
        console.log(posts)
      });
    });
  }, []);
  return (
    <div>
      <Carousel />
      <Buisness_Card />
      <Aboutcard />
      <HomeBlog />
      <div className="fluid">
        <div className="container">
          <div className=" d-flex row ">
            <div className="col-12 col-lg mt-5">
               <h4 className={` text-center ${styles.FeatureHeading}`}>Featured News</h4>
              {posts.length > 0 ? (
                posts.map((newPost, index) => (
                  <NewsCard key={index} {...newPost} />
                ))
              ) : (
                <p>No posts available.</p>
              )}
            </div>
            <div className="col-lg-4 col-md-12">
              <LatestNews />
            </div>
          </div>

          {/* <NewsCard/> */}
          <Sustainability />
          <OurCommitment />
          {/* <Sustainability2/> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
