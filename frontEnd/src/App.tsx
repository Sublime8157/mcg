import './App.css'
import Navbar from "../components/navbar"
import LandingView from "../components/homepage/sectionLandingView"
import DeliciousStory from "../components/homepage/sectionDeliciousStory"

const App: React.FC = () => {
  return (
    <>
    {/* Navigation bar */}
     <div className='flex flex-col items-center'>
      <Navbar />
      <LandingView  />
      <DeliciousStory />
     </div>
    </>
  )  
}

export default App
