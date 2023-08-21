import React from "react";

function ServiceIcon({ icon, text, xAxis, yAxis }) {
  return (
    <div>
      <svg className="w-[5rem] h-[5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 68" fill="none">
        <ellipse cx="41" cy="34" rx="41" ry="34" fill="#6C705F" />
        <image className="" xlinkHref={icon} x={xAxis} y={yAxis} />
      </svg>
      <span className="text-left font-normal text-2xl font-['Katibeh'] pl-3">{text}</span>
    </div>
  );
}
export default ServiceIcon;