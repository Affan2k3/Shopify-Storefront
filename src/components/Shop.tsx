import Link from "next/link";
import { grid } from "./Databse";

interface gridType {
  subTitle: string;
  title: string;
  desc: string;
  img1: string;
  alt1: string;
  img2: string;
  alt2: string;
  img3: string;
  alt3: string;
  img4: string;
  alt4: string;
  img5: string;
  alt5: string;
  btn1: string;
  btn2: string;
}

const isBrowser = (): boolean => typeof window !== "undefined";

if (isBrowser()) {
  window.addEventListener("scroll", () => {
    let topLeft = document.querySelectorAll(".topLeft");
    let topRight = document.querySelectorAll(".topRight");
    let botLeft = document.querySelectorAll(".botLeft");
    let botRight = document.querySelectorAll(".botRight");

    // ####LeftAnim
    for (let i = 0; i < topLeft.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = topLeft[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        topLeft[i].classList.add("topLeftActive");
      } else {
        topLeft[i].classList.remove("topLeftActive");
      }
    }

    // ####RightAnim
    for (let i = 0; i < topRight.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = topRight[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        topRight[i].classList.add("topRightActive");
      } else {
        topRight[i].classList.remove("topRightActive");
      }
    }

    // ####botLeft
    for (let i = 0; i < botLeft.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = botLeft[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        botLeft[i].classList.add("botLeftActive");
      } else {
        botLeft[i].classList.remove("botLeftActive");
      }
    }

    // ####botRight
    for (let i = 0; i < botRight.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = botRight[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        botRight[i].classList.add("botRightActive");
      } else {
        botRight[i].classList.remove("botRightActive");
      }
    }
  });
}

const gridData: gridType = grid;

export default function Shop() {
  return (
    <div>
      <div className=" max-w-7xl m-auto md:pl-10 pb-20">
        <div className="lg:mx-[6%] mx-[3%] flex justify-between md:flex-row flex-col">
          <div className="md:w-[60%] w-full flex relative">
            <div className="flex my-[20px] min-[560px]:w-[450px] w-[210px] m-auto items-center relative ">
              <img
                src={gridData.img1}
                alt={gridData.img1}
                className="center min-[560px]:max-w-[280px] max-w-[140px] m-auto min-[560px]:my-[40px] my-[40px] z-20 relative"
              />
              <img
                src={gridData.img3}
                alt={gridData.img3}
                className="topLeft min-[560px]:max-w-[180px] max-w-[90px] absolute top-0 left-0"
              />
              <img
                src={gridData.img5}
                alt={gridData.img5}
                className="topRight min-[560px]:max-w-[100px] max-w-[50px] absolute top-0 right-0"
              />
              <img
                src={gridData.img2}
                alt={gridData.img2}
                className="botLeft min-[560px]:max-w-[200px] max-w-[100px] absolute bottom-0 left-0"
              />
              <img
                src={gridData.img4}
                alt={gridData.img4}
                className="botRight min-[560px]:max-w-[160px] max-w-[80px] absolute bottom-0 right-0"
              />
            </div>
          </div>
          <div className="md:w-[40%] md:m-auto md:ml-14">
            <h2 className=" text-[17px] tracking-widest text-gray-700">
              {gridData.subTitle}
            </h2>
            <h1 className=" text-[30px] font-bold leading-[35px] mt-[5px]">
              {gridData.title}
            </h1>
            <p className=" text-[16px] text-gray-700 mt-[20px]">
              {gridData.desc}
            </p>
            <Link href={"/allmens/female"}>
              <button className="text-white hover:text-black bg-[#111111] hover:bg-white transition-all duration-500 border-2 border-black font-bold px-[20px] py-[12px] mt-[20px] mr-[20px]">
                {gridData.btn1}
              </button>
            </Link>
            <br className="sm:hidden" />
            <Link href={"/allmens/female"}>
              <button className="text-white hover:text-black bg-[#111111] hover:bg-white transition-all duration-500 border-2 border-black font-bold px-[20px] py-[12px] mt-[20px] ">
                {gridData.btn2}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
