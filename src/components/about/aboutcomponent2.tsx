/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { aboutdata1 } from "./data/data";
type aboutdata1 = {
  abovetext: string;
  imagesrc: string;
  date: string;
  heading: string;
  details: string;
};
export const Component2 = () => {
  const { abovetext, imagesrc, heading, date, details }: aboutdata1 =
    aboutdata1;
  return (
    <div className="flex flex-col items-center  p-[20px] min-[590px]:p-[40px]">
      <div className="flex flex-wrap text-center max-w-[58rem] mx-10">
        <p className="text-[16px] text-gray-900 min-[590px]:text-[22px] leading-9 tracking-widee">
          {abovetext}
        </p>
      </div>
      <div className="flex flex-col min-[590px]:flex-row min-[590px]:items-center items-start min-[590px]:justify-center gap-x-20 min-[1100px]:gap-x-[8rem]  my-[5.7rem] ">
        <div className="animation_triggering_class overflow-hidden">
          <Image
            src={imagesrc}
            className="scale_triggering_class"
            alt="Image"
            height={333.333}
            width={500}
          />
        </div>
        <div className="md:w-[370px] min-[590px]:p-0 p-5">
          <h1 className="mt-3 text-black text-[1.05rem] font-light tracking-widest">
            {date}
          </h1>
          <h3 className="text-[30px] font-extrabold">{heading}</h3>
          <p className="mt-3 text-[1.05rem] font-light text-black">{details}</p>
        </div>
      </div>
    </div>
  );
};
