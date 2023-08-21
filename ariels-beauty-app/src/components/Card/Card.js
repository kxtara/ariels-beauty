import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  const { image, imageAlt, title, description} = props
  return (
    <div className="bg-[#fffdfd] border-[1px] border-[rgba(30, 30, 30, 43%)] rounded-[0.75rem] flex flex-col justify-center items-center w-[19rem] mx-[auto] mt-[auto] mb-8 font-['inter']">
      <img className="w-[85%] mt-4 rounded-[0.3125rem]" src={image} alt={imageAlt} />
      <h4 className="mx-0 mb-0 mt-4 w-[84%] font-bold uppercase">{title}</h4>
      <p className="mx-0 mb-0 mt-4 w-[84%] pl-1">{description}</p>
      <Link className="text-[#f8f8f8] bg-[#6C705F] rounded-[15px] mx-0 mt-8 mb-[1.2rem] font-bold text-xl px-12 py-[.4rem]" to="/more">
        More
      </Link>
    </div>
  );
}
export default Card;
