import './App.css'
import Navbar from "../components/navbar"
import { LandingView, DeliciousStory, FeaturedOn, FeaturedDelicacies, FeaturedMenu, HappyHours, Feedback}  from "../components/homepage/homepageIndex";
import Footer from "../components/footer"
const App: React.FC = () => {
  return (
    <>
     <div className='flex flex-col items-center'>
      <Navbar />
      <LandingView  />
      <DeliciousStory />
      <FeaturedOn />
      <FeaturedDelicacies />
      <FeaturedMenu />
      <HappyHours />
      <Feedback />
     </div>
     <Footer />
    </>
  )  
}

export default App
