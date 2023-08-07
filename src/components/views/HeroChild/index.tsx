"use client"
import { useEffect, useState } from "react";
import Image from "next/image"
import { Suspense } from 'react';
import LoadingState from "@/components/shared/LoadingState";

export default function HeroChild() {
  const [isScale, setScale] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  let ArrayOfImages = ["https://cdn.shopify.com/s/files/1/2091/0251/files/unsplash2_da508866-2747-4a3b-9383-3278ed429e25_1512x.jpg?v=1613161313", "https://cdn.shopify.com/s/files/1/2091/0251/files/david-marcu-114194_1_1512x.jpg?v=1613161313", "https://cdn.shopify.com/s/files/1/2091/0251/files/unsplash6_8c550b31-d1f8-4eb7-82cd-4ad83611559b_1512x.jpg?v=1613161313"];
  let [active, setActive] = useState(0);

  let loop = true;

  setTimeout(() => {
    setScale(true);
  }, 100);
  useEffect(() => {
    setIsPageLoaded(true)
  }, [])

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
  }, [active]);

  return (
    <div className="h-screen ">
      <div className={`h-full sm:h-full overflow-hidden`}>
        {
          isPageLoaded ?
            <Image className={`
              -z-10
              h-full
              w-screen
              object-cover 
              ${isScale ? "scale-100 duration-[7000ms]" : "scale-150"}`}
              width={2000}
              height={2000}
              src={ArrayOfImages[active]}
              alt="Image" />
            :
            <div className="w-full h-screen flex justify-center items-center mx-auto">
              <LoadingState />
            </div>
        }
      </div>
    </div>
  )
}