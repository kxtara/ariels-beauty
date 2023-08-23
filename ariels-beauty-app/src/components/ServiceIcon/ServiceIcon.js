import React from "react";
function ServiceIcon({ icon, text, xAxis, yAxis, className,onClick }) {
  return (
    <div onClick={onClick}>
      <svg className={`w-[5rem] h-[5rem] ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 68" fill="none">
        <ellipse cx="41" cy="34" rx="41" ry="34" fill="#6C705F" />
        <image className="" xlinkHref={icon} x={xAxis} y={yAxis} />
      </svg>
      <span className="text-left font-normal text-2xl font-['Katibeh'] pl-3">{text}</span>
    </div>
  );
}
export default ServiceIcon;

// const test = [
//   {
//     onClick : ['Wash',washInfo],
//     icon : wash,
//     xAxis : -4,
//     yAxis : -3,
//     text : 'Wash'
//   },
//   {
//     onClick : ['Install',installInfo],
//     icon : install,
//     xAxis : -58,
//     yAxis : -35,
//     text : 'Install'
//   },
//   {
//     onClick : ['Braids',braidsInfo],
//     icon : braids,
//     xAxis : -18,
//     yAxis : -13,
//     text : 'Braids'
//   },
//   {
//     onClick : ['Ponytail',ponytailInfo],
//     icon : ponytail,
//     xAxis : -8,
//     yAxis : -8,
//     text : 'Ponytail'
//   }
// ]