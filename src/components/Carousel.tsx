"use client";
import { useState } from "react";
import CustomCarousel from "./CustomCarousel";
import { AllProductType } from "./typesandArrays/shopifyTypes/productTypes";

export default function Carousel({
  dataMen,
  dataWomen,
}: {
  dataMen: AllProductType;
  dataWomen: AllProductType;
}) {
  const [currentCarousel, setCurrentCarousel] = useState(1);
  return (
    <main className="w-screen flex flex-col items-center h-fit pb-[30px]">
      <h2 className="uppercase tracking-[3px] text-lg">Top Picks</h2>
      <div className="flex justify-between text-3xl font-bold ">
        <p
          className={`mx-3 cursor-pointer ${
            currentCarousel == 1 ? "underline" : ""
          }`}
          onClick={() => setCurrentCarousel(1)}
        >
          Men
        </p>
        <p
          className={`mx-3 cursor-pointer ${
            currentCarousel == 2 ? "underline" : ""
          }`}
          onClick={() => {
            setCurrentCarousel(2);
          }}
        >
          Women
        </p>
      </div>
      <div className="w-full h-full">
        {currentCarousel == 1 && (
          <CustomCarousel
            data={dataMen.data.collection.products}
            btnState="male"
          />
        )}
        {currentCarousel == 2 && (
          <CustomCarousel
            data={dataWomen.data.collection.products}
            btnState="female"
          />
        )}
      </div>
    </main>
  );
}
