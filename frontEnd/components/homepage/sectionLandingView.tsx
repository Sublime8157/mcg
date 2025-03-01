import React from 'react';

const landingView: React.FC = () => {
    return (
        <div className='justify-center gap-4 flex flex-col items-center h-screen'>
            <div>
                <h1 className='text-3xl text-pink-400 font-bold'>
                    Perth, WA
                </h1>
            </div>
            <h1 className='text-6xl text-pink-400 font-bold'>
                Filipino Cuisine
            </h1>
            <p className='mt-10 w-11/12 text-center'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime tempore earum quasi at sapiente omnis corrupti asperiores dolore? Soluta, ullam?
            </p>
            <div className='mt-10'>
                <button className='hover:cursor-pointer hover:bg-pink-300 w-54 h-16 bg-pink-400 text-white font-bold rounded-full'>
                    Book Order
                </button>
                <button className='hover:text-white hover:bg-pink-400 cursor-pointer ml-10 w-54 h-16 text-pink-400 border-1 border-pink-400 font-bold rounded-full'>
                    Explore Menu
                </button>
            </div>
        </div>
    )
}

export default landingView;