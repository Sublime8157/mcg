import React from 'react'; 
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <nav className='w-full justify-between flex items-center px-48 h-24 flex-row'>
            <div>
                <h1 className='text-3xl text-pink-400 font-bold'>
                    MCG
                </h1>
            </div>
            <div className='flex items-center flex-row w-full justify-end gap-8 '>
                <Link to="/" className='navbar-items'>Home</Link>
                <Link to="/aboutUs" className='navbar-items'>About Us</Link>
                <Link to="/menu" className='navbar-items'>Menu</Link>
                <Link to="/contactUs" className='navbar-items'>Contact Us</Link>
                <div><button className='text-white bg-pink-300 py-4 w-42 text-center cursor-pointer rounded-full shadow-sm hover:opacity-70'>Reservation</button></div>
            </div>
        </nav>
    )
}

export default NavBar;