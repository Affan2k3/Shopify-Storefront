"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Hero1, Hero2, Hero3 } from "@/components/assets";

export default function HeroSection() {
  const [isScale, setScale] = useState(false);
  let ArrayOfImages = [Hero1, Hero2, Hero3];
  let [active, setActive] = useState(0);

  let loop = true;

  setTimeout(() => {
    setScale(true);
  }, 100);

  const setNextImage = () => {
    if (active !== ArrayOfImages.length - 1) {
      setActive((active += 1));
      setScale(false);
      setTimeout(() => {
        setScale(true);
      }, 50);
    } else {
      if (loop) {
        setActive((active = 0));
        setScale(false);
        setTimeout(() => {
          setScale(true);
        }, 50);
      }
    }
  };
  useEffect(() => {
    if (true) {
      let autoSlider = setInterval(setNextImage, 7100);
      return () => clearInterval(autoSlider);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="h-screen ">
      <div className={`h-full sm:h-full overflow-hidden`}>
        <Image
          className={`
        -z-10
        h-full
        w-screen
        object-cover 
        ${isScale ? "scale-100 duration-[7000ms]" : "scale-150"}`}
          src={ArrayOfImages[active]}
          alt="Image"
        />
      </div>
    </div>
  );
}
