/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import HeroSection from ".";

export default function TextEffectSectionForAbout() {
  const arrayOfText = ["Who are dedicated", "We believe in", "Founded in 2022"];
  const arrayOfText2 = [
    "sustainable apparel",
    "Locally-made goods",
    "We employ 20 vocal artists",
  ];
  let [activeText, setActiveText] = useState(0);
  const [transitionOfText, setTransitionOfText] = useState("translate-y-0");
  const [opacityItemsText, setOpacityItemsText] = useState("opacity-100");
  let loop = true;

  const setNextText = () => {
    if (activeText !== arrayOfText.length - 1) {
      setTimeout(() => {
        setActiveText((activeText += 1));
      }, 500);
      transitionOpacityAnimationText();
    } else {
      if (loop) {
        transitionOpacityAnimationText();
        setTimeout(() => {
          setActiveText((activeText = 0));
        }, 500);
      }
    }
  };
  useEffect(() => {
    if (true) {
      let autoText = setInterval(setNextText, 3000);
      return () => clearInterval(autoText);
    }
  }, [activeText, setNextText]);

  function transitionOpacityAnimationText() {
    setTransitionOfText("-translate-y-28");
    setTimeout(() => {
      setOpacityItemsText("opacity-0");
      setTimeout(() => {
        setTransitionOfText("translate-y-24");
        setTimeout(() => {
          setOpacityItemsText("opacity-100");
          setTransitionOfText("translate-y-0");
        }, 300);
      }, 300);
    }, 300);
  }
  return (
    <div className="overflow-hidden max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto z-10 h-full flex justify-start items-end absolute inset-0 w-full bg-transparent pb-10 md:pb-[7rem]">
        <div className="h-28 overflow-hidden py-4 px-4 mx-auto ">
          <h1
            className={`${transitionOfText} ${opacityItemsText} text-center duration-300 text-3xl md:text-5xl text-white `}
          >
            {arrayOfText[activeText]}
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto z-10 h-full flex justify-start items-end absolute inset-0 w-full bg-transparent md:pb-5">
        <div className="h-28 overflow-hidden py-4 px-4 mx-auto ">
          <h1
            className={`${transitionOfText} ${opacityItemsText} text-center duration-300 text-3xl md:text-5xl text-white `}
          >
            {arrayOfText2[activeText]}
          </h1>
        </div>
      </div>
    </div>
  );
}