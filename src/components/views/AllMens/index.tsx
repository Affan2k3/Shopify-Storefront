
import { useEffect, useState } from "react";
import Image from "next/image";
import { Jost } from "next/font/google";
import { NavigationDataLabelType, ProductDataType } from "@/components/typesandArrays/AllMensData";
import RealImageChangingEffect from "./RealImageChangingEffect";
import { CartState } from "@/globalState/context/CartContext";

const inter = Jost({ subsets: ["latin"] });

export default function AllMens({ particularDatas, apiAllProductData, navigaitonData }: any) {
  let { valueToSearchFromNavbar, setValueToSearchFromNavbar } = CartState();
  const [active, setActive] = useState(1);
  const [allProductData, setallProductData] = useState(
    apiAllProductData.data1.data.collection.products.edges
  );
  const [particularProductData, setParticularProductData] = useState(
    particularDatas.productData
  );

  function filterData(labelToMatch: string | null) {
    if (labelToMatch == "data1") {
      setActive(1);
      setallProductData(apiAllProductData.data1.data.collection.products.edges);
    } else if (labelToMatch == "data2") {
      setActive(2);
      setallProductData(apiAllProductData.data2.data.collection.products.edges);
    } else if (labelToMatch == "data3") {
      setActive(3);
      setallProductData(apiAllProductData.data3.data.collection.products.edges);
    } else if (labelToMatch == "data4") {
      setActive(4);
      setallProductData(apiAllProductData.data4.data.collection.products.edges);
    } else if (labelToMatch == "data5") {
      setActive(5);
      setallProductData(apiAllProductData.data5.data.collection.products.edges);
    } else if (labelToMatch == "data6") {
      setActive(6);
      setallProductData(apiAllProductData.data6.data.collection.products.edges);
    }
  }
  if (() => typeof window !== undefined && localStorage) {
    setTimeout(() => {
      let setValueInLocalStorage = localStorage.getItem("uniqueToGetOfNavSubMenu")
      setValueToSearchFromNavbar({ type: "update", data: setValueInLocalStorage });
      filterData(localStorage.getItem("uniqueToGetOfNavSubMenu"));
    }, 500);
  }
  return (
    <div>
      <div>
        <div className="fixed top-0 right-0 left-0 -z-50">
          <Image
            className="w-full h-[35rem] object-cover"
            width={2000}
            height={2000}
            src={
              particularDatas.homeImageUrl ? particularDatas.homeImageUrl : "/"
            }
            alt={particularDatas.homeAltText}
          />
        </div>
        <div>
          <div className="relative max-w-[77rem] mx-auto h-[28rem]">
            <h2 className="text-white absolute bottom-10 text-4xl md:text-6xl ml-8 lg:ml-2">
              {particularDatas.homeAltText}
            </h2>
          </div>
        </div>
        <div className={`${inter.className} py-16 w-full bg-white px-5`}>
          <div className="gap-4 sm:gap-6 max-w-[77rem] justify-center sm:justify-start mx-auto flex flex-wrap">
            <div className="w-5/12 md:sm:w-2/12 lg:w-3/12 h-[32rem]">
              <ul className="space-y-4">
                <li
                  onClick={() => {
                    setValueToSearchFromNavbar({ type: "update", data: "data1" });
                    filterData(valueToSearchFromNavbar);
                  }}
                  className={`relative text-xl cursor-pointer text-gray-800 ${active == 1 ? "font-semibold" : "font-medium"
                    }`}
                >
                  <div className="absolute inset-0 opacity-0"></div>
                  {navigaitonData[0]}
                </li>
                <li
                  onClick={() => {
                    setValueToSearchFromNavbar({ type: "update", data: "data2" });
                    filterData(valueToSearchFromNavbar);
                  }}
                  className={`relative hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${active == 2 ? "font-semibold" : "font-medium"
                    }`}
                >
                  <div className="absolute inset-0 opacity-0"></div>
                  {navigaitonData[1]}
                </li>
                <li
                  onClick={() => {
                    setValueToSearchFromNavbar({ type: "update", data: "data3" });
                    filterData(valueToSearchFromNavbar);
                  }}
                  className={`relative hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${active == 3 ? "font-semibold" : "font-medium"
                    }`}
                >
                  <div className="absolute inset-0 opacity-0"></div>
                  {navigaitonData[2]}
                </li>
                <li
                  onClick={() => {
                    setValueToSearchFromNavbar({ type: "update", data: "data4" });
                    filterData(valueToSearchFromNavbar);
                  }}
                  className={`relative hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${active == 4 ? "font-semibold" : "font-medium"
                    }`}
                >
                  <div className="absolute inset-0 opacity-0"></div>
                  {navigaitonData[3]}
                </li>
                <li
                  onClick={() => {
                    setValueToSearchFromNavbar({ type: "update", data: "data5" });
                    filterData(valueToSearchFromNavbar);
                  }}
                  className={`relative hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${active == 5 ? "font-semibold" : "font-medium"
                    }`}
                >
                  <div className="absolute inset-0 opacity-0"></div>
                  {navigaitonData[4]}
                </li>
                <li
                  onClick={() => {
                    setValueToSearchFromNavbar({ type: "update", data: "data6" });
                    filterData(valueToSearchFromNavbar);
                  }}
                  className={`relative hover:ml-2 duration-500 cursor-pointer text-xl text-gray-800 ${active == 6 ? "font-semibold" : "font-medium"
                    }`}
                  tabIndex={0}
                >
                  <div className="absolute inset-0 opacity-0"></div>
                  {navigaitonData[5]}
                </li>
              </ul>
            </div>
            {allProductData.map((subItem: any, index: number) => (
              <RealImageChangingEffect
                key={index}
                subItem={subItem}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
