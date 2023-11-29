export default function Subtitle({title}){
    return(
        // Displays text between two lines
        <div className="flex justify-center items-center gap-4 my-10 mx-0">
            <div className="bg-[#6C705F] w-12 h-[2px] md:w-28"></div>
            <h2 className={`text-[#4D4D4D] text-center text-[1.6875rem] max-w-full overflow-hidden font-['IM_FELL_French_Canon_SC'] md:text-[3.1rem] px-3 `}>{title}</h2>
            <div className="bg-[#6C705F] w-12 h-[2px] md:w-28"></div>
        </div>
    )
}