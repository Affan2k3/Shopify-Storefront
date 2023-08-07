import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
type Footerdatatype = {
  header: string;
  list: string[];
};

const FooterChild = (item: Footerdatatype) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleAccordion() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="w-full mt-4 min-[590px]:hidden border-b border-gray-700">
      <div className="p-2 ">
        <button
          className="flex gap-3 w-full text-lg text-left justify-between items-center"
          onClick={toggleAccordion}
        >
          <h1 className="text-[15px] font-medium">{item.header}</h1>
          <IoIosArrowDown
            className={` duration-400  transition-all ease-out ${
              isOpen ? "rotate-180 " : "rotate-360 "
            }`}
          />
        </button>
        {item.list.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className={`overflow-hidden  transition-max-height ease-in-out duration-[600ms]  ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div
                className={`overflow-auto ease-in-out duration-[600ms] pt-4 ${
                  isOpen
                    ? `translate-y-0  opacity-100`
                    : "translate-y-[8px]  opacity-0"
                }`}
              >
                <ul>
                  <li className="flex flex-col text-white " key={item}>
                    {item}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterChild;
