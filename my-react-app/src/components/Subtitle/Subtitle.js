import React from "react";
function Subtitle(props){
    return(
        <div className="flex justify-center items-center gap-4 my-8 mx-0">
            <div className="bg-[#6C705F] w-12 h-[2px]"></div>
            <h2 className="text-[#4D4D4D] text-center text-[1.6875rem] max-w-full overflow-hidden font-['IM_FELL_French_Canon_SC']">{props.title}</h2>
            <div className="bg-[#6C705F] w-12 h-[2px]"></div>
        </div>
    )
}

export default Subtitle