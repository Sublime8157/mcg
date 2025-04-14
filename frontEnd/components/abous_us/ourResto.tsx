import React from "react";

const OurResto: React.FC= () => {
    return(
        <div className="flex flex-col w-full h-auto p-12 items-center justify-center">
            <div className="gap-8 text-center w-5/12 flex flex-col items-center">
                <h1 className="text-4xl text-black" style={{ fontWeight: "bolder" }}>Our Resto.</h1>
                <p className="text-lg">Serving best Filipino food in Perth</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit beatae repudiandae deleniti necessitatibus culpa officia tempore, sequi id earum.</p>
                <img src='/images/testImage0.png'></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quisquam provident qui impedit voluptates omnis. Ex est quidem ratione repellendus quaerat. Ab saepe facilis libero, temporibus perferendis veniam accusantium dolorem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, amet.</p>
            </div>
        </div>
    )
}

export default OurResto 