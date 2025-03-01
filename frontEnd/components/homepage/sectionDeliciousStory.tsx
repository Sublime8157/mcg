import React from "react";

const deliciousStory: React.FC = () => {
    return (
        <div className="h-screen w-full">
            <div className="flex flex-row justify-evenly h-9/12 w-full">
                <div className="flex w-80 flex-col gap-8 h-full justify-evenly">
                    <div className="font-bold text-xl">MGC</div>
                    <div className="text-4xl">Lorem, ipsum dolor.</div>
                    <div className="text-xl">Lorem, ipsum dolor.</div>
                    <div className="text-lg">test</div>
                    <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ipsum dignissimos explicabo nulla veniam mollitia aliquam recusandae enim illum culpa!</div>
                    <div className=""><button className="bg-pink-400 rounded-full py-4 px-8 text-white font-bold">Reservation</button></div>
                </div>
                <div className="h-full flex flex-row gap-4">
                    <div className="h-full">
                        <div className="h-full">
                            <img src="/images/deliciousSection.jpg" className="h-full"></img>
                        </div>
                    </div>
                    <div className="h-full">
                        <div className="h-full">
                            <img src="/images/deliciousSection2.jpg" className="h-full w-96"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default deliciousStory;