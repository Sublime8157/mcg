import React from 'react';

const HappyHours: React.FC = () => {
    return (
        <div className='gap-12 items-center justify-center flex-col flex w-full h-screen'>
            <div className='flex-row flex items-center justify-center w-full'>
                <hr className='border-gray-400 border-2 w-80'></hr>
                <img src='/images/sampleLogo.jpg' width={200}></img>
                <hr className='border-gray-400 border-2 w-80'></hr>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Enjoy 50% on Your First Purchase</h1>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-pink-300' style={{ fontWeight: 900 }}>Happy Hours</h1>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Everyday Open</h1>
            </div>
            <div>
                <button className='hover:cursor-pointer hover:bg-pink-300 w-54 h-16 bg-pink-400 text-white font-bold rounded-full'>
                    Book Order
                </button>
            </div>
        </div>
    )
}

export default HappyHours;