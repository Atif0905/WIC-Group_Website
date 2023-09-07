import Carousel from "./HomePage/Carousel/Carousel";
import Aboutcard from "./HomePage/AboutCard/Aboutcard";
import Buisness_Card from './HomePage/Buisness/Buisness_Card'

 const  Home = () => {
  return (
    <div>
     <Carousel/>
     <Buisness_Card/>
     <Aboutcard/>
    </div>
  );
}
export default Home