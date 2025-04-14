import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center gap-8 featuredDelicacies'>
           <h1 className='text-5xl text-pink-300' style={{ fontWeight: 900 }}>Order Now</h1>
           <img src='/images/testImage0.png'></img>
           <p className='text-white text-lg w-6/12 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil ad sapiente quibusdam vel laboriosam architecto aperiam facilis esse quae aliquam aliquid fugit pariatur assumenda voluptatibus ab a, tempora recusandae.</p>
           <button className='hover:cursor-pointer hover:bg-pink-300 w-54 h-16 bg-pink-400 text-white font-bold rounded-full'>
                Book Order
            </button>
            <h1 className='text-white text-2xl'>Or Call Us: 123 456 789</h1>
            <div className='flex flex-row gap-4 items-center'>
                <img src="/images/Icons/facebook.jpg" className='hover:opacity-50 rounded-sm cursor-pointer' width={25}></img>
                <img src="/images/Icons/twitter.jpg" className='hover:opacity-50 rounded-sm cursor-pointer' width={25}></img>
                <img src="/images/Icons/google.jpg" className='hover:opacity-50 cursor-pointer' width={25}></img>
                <img src="/images/Icons/instagram.jpg" className='hover:opacity-50 cursor-pointer' width={25}></img>
            </div>
            <div className="mt-20 flex flex-row w-10/12 justify-between">
                <div className='text-lg text-white' >Copyright © { new Date().getFullYear() } MCG</div>
                <div className='text-lg text-white' >Powered By MCG</div>
            </div>
        </div>
    )
}

export default Footer;