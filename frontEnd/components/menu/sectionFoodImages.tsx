import React from 'react'

const FoodImages: React.FC = () => {
    return(
        <div className='p-10 h-full flex flex-row gap-24 items-center'>
            <div className='h-full shadow-lg relative'>
                <img className='h-96 rounded-lg relative' src='/images/Menu/adobo.jpg' width={250}></img>
                <div className='absolute bottom-4 p-2 ps-4 flex flex-col gap-4 items-start'>
                    <h1 className='text-white text-2xl' style={{ fontWeight: "bolder" }}>Chicken Adobo</h1>
                    <hr className="border-none w-24 rounded bg-pink-400  h-1"></hr>
                    <div className="text-2xl text-white" style={{ fontWeight: "bold" }}>$ 10.00</div>
                </div>
            </div>
            <div className='relative h-full shadow-lg'>
                <img className='h-96 rounded-lg' src='/images/Menu/caldereta.jpg' width={250}></img>
                <div className='absolute bottom-4 p-2 ps-4 flex flex-col gap-4 items-start'>
                    <h1 className='text-white text-2xl' style={{ fontWeight: "bolder" }}>Beef Caldereta</h1>
                    <hr className="border-none w-24 rounded bg-pink-400  h-1"></hr>
                    <div className="text-2xl text-white" style={{ fontWeight: "bold" }}>$ 12.00</div>
                </div>
            </div>
            <div className='h-full shadow-lg relative'>
                <img className='h-96 rounded-lg' src='/images/Menu/afritada.jpg' width={250}></img>
                <div className='absolute bottom-4 p-2 ps-4 flex flex-col gap-4 items-start'>
                    <h1 className='text-white text-2xl' style={{ fontWeight: "bolder" }}>Chicken Afritada</h1>
                    <hr className="border-none w-24 rounded bg-pink-400  h-1"></hr>
                    <div className="text-2xl text-white" style={{ fontWeight: "bold" }}>$ 10.00</div>
                </div>
            </div>
        </div>
    )
}

export default FoodImages