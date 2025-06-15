import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx'
import ImagesSection from '../Components/ImagesSection.jsx';
import HeroSectionImageDetail from '../Components/HeroSectionImageDetail.jsx';
function TourDetails() {
  const { id } = useParams();

  // You can fetch data based on id or hardcode for now
  return (
   <>
   <Navbar/>
   <ImagesSection/>
   <HeroSectionImageDetail/>
   </>
  );
}

export default TourDetails;
