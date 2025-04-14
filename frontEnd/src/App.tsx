import './App.css'
import Navbar from "../components/navbar"
import HomePage from "../components/homepage/homepageIndex"
import AboutUs from "../components/abous_us/aboutUsIndex"
import Footer from "../components/footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MdArrowCircleUp } from "react-icons/md";
// import Browser
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path ="/" element={<HomePage />} /> 
        <Route path ="/aboutUs" element={<AboutUs />} />
      </Routes>
     <Footer />
    <div className={`fixed bottom-0 right-0 p-10 text-3xl hover:text-4xl cursor-pointer`}><MdArrowCircleUp /></div>
  </Router>
  )  
}

export default App
