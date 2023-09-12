import Carousel from "./HomePage/Carousel/Carousel";
import Aboutcard from "./HomePage/AboutCard/Aboutcard";
import Buisness_Card from './HomePage/Buisness/Buisness_Card'
import NewsCard from "./HomePage/NewsCard/NewsCard";
import Sustainability from "./HomePage/Sustainability/Sustainability";
import HomeBlog from "./HomePage/HomeBlog/HomeBlog";

 const  Home = () => {
  return (
    <div>
     <Carousel/>
     <Buisness_Card/>
     <Aboutcard/>
     <HomeBlog/>
     <NewsCard/>
     <Sustainability/>

    </div>
  );
}
export default Home