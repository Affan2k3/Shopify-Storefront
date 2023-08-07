import { Footerdata, footsub, powername } from "./data/footerdata";
import Image from "next/image";
import FooterChild from "./FooterChild";
import { useState } from "react";
import { countries } from "./data/currencydata";

type currencydatatype = {
  name: string;
  flag: string;
  alt: string;
};
type Footerdatatype = {
  header: string;
  list: string[];
};
export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  return (
    <div
      className="w-full bg-[#111111] pt-20 pb-14 text-[14.88px]  text-white"
      onClick={() => {
        isOpen && setIsOpen(!isOpen);
      }}
    >
      <div className="mr-0 flex flex-col px-[20px] min-[590px]:pl-[40px] md:flex-row md:justify-around md:pl-[0px] lg:mr-7">
        <div className="">
          <div className="flex w-full flex-row justify-between min-[590px]:flex-col">
            <div>
              <Image
                src={footsub.logosrc}
                alt="motion"
                height={110}
                width={110}
              />
            </div>
            <div className="flex flex-row gap-4 min-[590px]:py-6 ">
              <Image src="/images/fb.svg" alt="motion" height={27} width={27} />
              <Image
                src="/images/twitter.svg"
                alt="motion"
                height={28}
                width={28}
              />
            </div>
          </div>
          <br />
        </div>
        {Footerdata.map((item: Footerdatatype) => {
          return (
            <div className="hidden min-[590px]:inline" key={item.header}>
              <li className=" flex flex-col">
                <>
                  <h2 className="font-bold tracking-widest">{item.header}</h2>
                  <ul className="py-5">
                    {item.list.map((item: any) => {
                      return (
                        <li
                          className=" flex flex-col py-[0.4rem]  text-white font-normal"
                          key={item}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </>
              </li>
            </div>
          );
        })}

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* FOR MOBILE SCREEN DROPDOWNS */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {Footerdata.map((item: Footerdatatype, index: any) => {
          return <FooterChild {...item} key={index} />;
        })}

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="flex flex-col  md:w-72 ">
          <h2 className=" mt-5 font-bold uppercase">{footsub.head}</h2>
          <h1 className=" py-4 ">{footsub.detail}</h1>
          <div className="relative flex w-full">
            <div className="pointer-events-none  absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                style={{ color: "white" }}
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-[18.5rem] border border-gray-800 bg-transparent p-2 pl-10 placeholder:pl-1 placeholder:text-white"
              placeholder="Enter your email"
              required
            ></input>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center pt-[2rem]">
        <div className="relative ">
          <button
            type="button"
            className="inline-flex w-[270px] justify-between gap-x-1.5 border border-gray-800 bg-transparent px-3 py-2 text-sm text-white  "
            id="menu-button"
            aria-expanded={isOpen ? "true" : "false"}
            aria-haspopup="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected ? (
              <>
                <Image
                  src={selected2}
                  alt={countries[0].alt}
                  height={25}
                  width={25}
                />
                <h1 className="text-base">{selected} </h1>
              </>
            ) : (
              <>
                <Image
                  src={countries[0].flag}
                  alt={countries[0].alt}
                  height={25}
                  width={25}
                />
                <h1 className="text-base">{countries[0].name} </h1>
              </>
            )}

            <svg
              className="-mr-1 h-6 w-6 text-gray-200"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute bottom-[2.71rem] h-[22rem] w-[270px] overflow-hidden  overflow-y-scroll bg-white text-black shadow-lg min-[500px]:-left-16 min-[500px]:w-[26rem] min-[590px]:left-0 md:w-[28rem]">
              {countries.map((item: currencydatatype) => (
                <div className="flex  flex-col-reverse  " key={item.name}>
                  <div
                    className="hover flex cursor-pointer py-2 hover:underline"
                    onClick={() => {
                      if (
                        item?.name?.toLowerCase() !== selected.toLowerCase()
                      ) {
                        setSelected(item?.name);
                        setSelected2(item?.flag);

                        setIsOpen(false);
                      }
                    }}
                  >
                    <Image
                      src={item.flag}
                      alt={item.alt}
                      height={25}
                      width={25}
                      className="ml-2"
                    />
                    <h1 className=" pl-2 text-base text-black">{item.name} </h1>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <h1 className="mt-4 text-xs">{powername}</h1>
      </div>
    </div>
  );
};
