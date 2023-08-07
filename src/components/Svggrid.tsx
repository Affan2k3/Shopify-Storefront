import React from "react";
import { svgdata } from "./data/svggriddata";
type svgdata = {
  svgpath: string;
  caption: string;
};
function Svggrid() {
  return (
    <div className=" my-20  grid  justify-center gap-y-10 min-[590px]:px-10 min-[590px]:grid-cols-3 max-w-7xl m-auto">
      {svgdata.map((item: svgdata) => (
        <div className="flex flex-col items-center px-6" key={item.svgpath}>
          <svg viewBox="0 0 100 100" className="h-[70px] ">
            <path
              d={item.svgpath}
              stroke="#000000"
              strokeWidth="3"
              fill="#FFFFFF"
            />
          </svg>
          <h1 className=" items-center pt-2 text-center min-[590px]:text-[25px] text-[21px] font-extrabold leading-8 ">
            {item.caption}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Svggrid;
