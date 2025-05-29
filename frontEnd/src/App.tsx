import './App.css'
import Navbar from "../components/navbar"
import HomePage from "../components/homepage/homepageIndex"
import AboutUs from "../components/abous_us/aboutUsIndex"
import Menu from "../components/menu/ourMenuIndex"
import ContactUs from "../components/contact_us/contactUsIndex"
import Footer from "../components/footer"
import {Routes, Route } from "react-router-dom";

// import Browser
const App: React.FC = () => {
  return (
   <>
      <Navbar />
        <Routes>
            <Route path ="/" element={<HomePage />} /> 
            <Route path ="/aboutUs" element={<AboutUs />} />
            <Route path ="/menu" element={<Menu />} />
            <Route path ="/contactUs" element={<ContactUs />} />
        </Routes>
      <Footer />
    </>
  )  
}

export default App
