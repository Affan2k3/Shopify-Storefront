import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { formdata } from "./data/data";

type formdata = {
  header: string;
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  buttontext: string;
};

export default function Form() {
  const { header, input1, input2, input3, input4, buttontext }: formdata =
    formdata;
  return (
    <div className="pb-14 border-b mb-14">
      <div className="flex content-center justify-center  p-[20px] lg:p-[40px] ">
        <form className="mt-3 flex flex-col gap-3 w-[960px]">
          <p className="text-left text-[30px] font-extrabold">{header}</p>
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-1 flex-col gap-3 mt-5">
              <label htmlFor="userName">{input1}</label>
              <input
                id="userName"
                type="text"
                className="border p-2 outline-none focus:border-gray-900"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 mt-5">
              <label htmlFor="userEmail">{input2}</label>
              <input
                id="userEmail"
                type="email"
                className="border p-2 outline-none focus:border-gray-900"
              />
            </div>
          </div>

          <label className="mt-5" htmlFor="userMessage">
            {input3}
          </label>
          <textarea
            id="userMessage"
            rows={1}
            className="border p-2 outline-none focus:border-gray-900"
          />
          <label className="mt-5" htmlFor="userMessage">
            {input4}
          </label>
          <textarea
            id="userMessage"
            rows={6}
            className="border p-2 outline-none focus:border-gray-900"
          />

          <button className="group text-white flex bg-[#111111] font-bold pl-[20px] w-fit py-[12px] mt-[20px] transition-all delay-300 duration-1000">
            <span className="transition-all duration-300 group-hover:pr-[35px]">
              {buttontext}
            </span>
            <FaLongArrowAltRight className="relative -z-10 group-hover:z-0 -right-20 text-2xl text-white transition-all duration-300 group-hover:right-5" />
          </button>
          <h1 className="mt-6 text-[0.9rem] font-light ">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </h1>
        </form>
      </div>
    </div>
  );
}
