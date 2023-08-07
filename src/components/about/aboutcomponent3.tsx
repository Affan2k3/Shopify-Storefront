/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { aboutdata2 } from "./data/data";
type aboutdata2 = {
  imagesrc: string;
  date: string;
  heading: string;
  details: string;
  buttontext: string;
};
export const Component3 = () => {
  const { imagesrc, heading, date, details, buttontext }: aboutdata2 =
    aboutdata2;
  return (
    <div className="flex flex-col items-center  p-[20px] min-[590px]:p-[40px]">
      <div className="flex flex-col-reverse min-[590px]:flex-row content-center items-start min-[590px]:items-center min-[590px]:justify-center gap-x-20 min-[1100px]:gap-x-[7rem]  my-[5.7rem] ">
        <div className="md:w-[370px] min-[590px]:p-0 p-5">
          <h1 className="mt-3 text-black text-[1.05rem] font-light tracking-widest">
            {date}
          </h1>
          <h3 className="text-[30px] font-extrabold">{heading}</h3>
          <p className="mt-3 text-[1.05rem] font-light text-black">{details}</p>
          <button className="group text-white text-[1.1rem] flex bg-[#111111] font-bold pl-[20px] py-[12px] mt-[14px] md:mt-[20px] transition-all delay-300 duration-1000">
            <span className="transition-all duration-300 group-hover:pr-[35px]">
              {buttontext}
            </span>
            <FaLongArrowAltRight className="relative -z-10 group-hover:z-0 -right-20 text-2xl text-white transition-all duration-300 group-hover:right-5" />
          </button>
        </div>
        <div className="animation_triggering_class overflow-hidden">
          <Image
            src={imagesrc}
            className="scale_triggering_class"
            alt="Image"
            height={410}
            width={612}
          />
        </div>
      </div>
    </div>
  );
};
