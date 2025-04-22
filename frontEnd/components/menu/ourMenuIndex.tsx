import React from "react";
import KnowMore from "../knowMore"

const OurMenu: React.FC = () => {

    return(
        <div className="flex flex-col">
            <KnowMore 
                header="Our Menu." 
                subHeader="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a dolores nihil nobis adipisci minus porro nostrum amet vero sed quisquam consequuntur, tempora, voluptates labore distinctio necessitatibus eaque quam, veniam facere. Quis dignissimos omnis cumque ipsam quas nobis cum inventore." />
        </div>
    )
}

export default OurMenu