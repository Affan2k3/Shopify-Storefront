import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import signup from "./data/signupdata";

type signuptype = {
  head: string;
  detail: string;
  button: string;
};
export const Signup = () => {
  const { head, detail, button }: signuptype = signup;
  return (
    <>
      <div className="flex h-96 flex-col items-center bg-gray-50">
        <div className="mt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36px"
            height="36px"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </div>
        <h2 className=".myfont text-[21px] min-[590px]:text-[25.5px] font-bold text-[#1C1D1D]">
          {head}
        </h2>
        <h1 className="mt-8 flex justify-center px-4 text-center text-[16px] min-[590px]:text-lg text-gray-600">
          {detail}
        </h1>
        <div className="my-1 min-[590px]:my-2">
          <div className="container flex w-auto">
            <div>
              <input
                className="border  py-[10px] pl-[10px] outline-none focus:border-gray-900 min-[378px]:w-[278px] w-[215px]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <button className=" bg-[#1C1D1D] px-5 py-[9px] ] text-lg font-extrabold text-white">
                <span className=" hidden min-[590px]:inline">{button}</span>
                <HiArrowNarrowRight className="inline min-[590px]:hidden" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
