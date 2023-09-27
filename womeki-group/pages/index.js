import React, { useEffect, useState } from 'react'
import Carousel from "./HomePage/Carousel/Carousel";
import Aboutcard from "./HomePage/AboutCard/Aboutcard";
import Buisness_Card from './HomePage/Buisness/Buisness_Card'
import NewsCard from "./HomePage/NewsCard/NewsCard";
import Sustainability from "./HomePage/Sustainability/Sustainability";
import HomeBlog from "./HomePage/HomeBlog/HomeBlog";
import OurCommitment from "./HomePage/OurCommitment/OurCommitment";
import Sustainability2 from "./HomePage/Sustainability2/Sustainability2";

 const  Home = () => {
  const [posts,setPosts] = useState([]);
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
     <Carousel/>
     <Buisness_Card/>
     <Aboutcard/>
     <HomeBlog/>
     {posts.length > 0 ? (
      posts.map((newPost, index) => (
        <NewsCard key={index} {...newPost} />
      ))
    ) : (
      <p>No posts available.</p>
    )}
     {/* <NewsCard/> */}
     <Sustainability/>
     <OurCommitment/>
     {/* <Sustainability2/> */}
    </div>
  );
}
export default Home