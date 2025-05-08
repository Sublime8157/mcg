import './App.css'
import Navbar from "../components/navbar"
import HomePage from "../components/homepage/homepageIndex"
import AboutUs from "../components/abous_us/aboutUsIndex"
import Menu from "../components/menu/ourMenuIndex"
import ContactUs from "../components/contact_us/contactUsIndex"
import Footer from "../components/footer"
import {Routes, Route } from "react-router-dom";
import { MdArrowCircleUp } from "react-icons/md";
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
      <div className={`fixed bottom-0 right-0 p-10 text-3xl hover:text-4xl cursor-pointer`}><MdArrowCircleUp /></div>
    </>
  )  
}

export default App
