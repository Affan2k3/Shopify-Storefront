import { FilterIco } from "@/components/assets";
import Image from "next/image";
import { useReducer, useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiArrowDropDownLine } from 'react-icons/ri';
import SubFilterMenu from "./SubFilterMenu";
import { AiOutlineClose } from "react-icons/ai";

export default function ProductAndFilterationSection({productTypes , availableSizes , availableColors, appliedFiltration, setAppliedFiltration }: any) {
    const [filterMenuBar, setFilterMenuBar] = useState(false);
    const [colorSuspense, setColorSuspense] = useState(" ");
    const [priceSuspense, setPriceSuspense] = useState(" ");
    const [sizeSuspense, setSizeSuspense] = useState(" ");
    const [productTypeSuspense, setProductTypeSuspense] = useState(" ");
    const [openDropDown, setOpenDropDown] = useState(" ");
    function colorToExpandSubMenu() {
        if (openDropDown === "colors") {
            setOpenDropDown(" ")
        } else {
            setOpenDropDown("colors")
        }
    }
    function priceToExpandSubMenu() {
        if (openDropDown === "price") {
            setOpenDropDown(" ")
        } else {
            setOpenDropDown("price")
        }
    }
    function sizeToExpandSubMenu() {
        if (openDropDown === "sizes") {
            setOpenDropDown(" ")
        } else {
            setOpenDropDown("sizes")
        }
    }
    function productTypeToExpandSubMenu() {
        if (openDropDown === "productType") {
            setOpenDropDown(" ")
        } else {
            setOpenDropDown("productType")
        }
    }
    return (
        <div>
            <div onClick={() => setFilterMenuBar(false)} className={`cursor-pointer ${filterMenuBar ? "block" : "hidden"} fixed inset-0 bg-gray-900 opacity-60 z-30`} />
            <div className={`overflow-y-auto space-y-6 ${filterMenuBar ? "visible translate-x-0" : "invisible -translate-x-full"} duration-500 h-screen bg-white p-8 fixed top-0 left-0 bottom-0 z-50 w-80 border-r`}>
                <div className={`sticky -top-8 pt-5 bg-white z-20 pr-2 ${filterMenuBar ? "translate-y-0 opacity-100 " : "opacity-0 translate-y-24 "} pb-5 border-b duration-500 flex justify-between items-center`}>
                    <h2 className="text-2xl font-semibold">Filter</h2>
                    <div onClick={() => { setFilterMenuBar(false); }} className="cursor-pointer">
                        <GrClose />
                    </div>
                </div>
                {appliedFiltration ?
                    <div className="space-y-2">
                        {
                            appliedFiltration.map((item: any, index: any) =>
                                <div key={index} className="bg-black p-2 text-white flex justify-between items-center">
                                    <h4>{item.name}</h4>
                                    <button onClick={() => setAppliedFiltration({ act: "remove", id: item.id })}><AiOutlineClose size={15} fill="white" /></button>
                                </div>
                            )
                        }
                    </div>
                    : ""
                }
                <div className={` h-full ${filterMenuBar ? "translate-y-0 opacity-100 " : "opacity-0 translate-y-28 "} space-y-7 duration-700`}>
                    <div className={`cursor-pointer ${openDropDown === "colors" ? "h-52 transition-all duration-1000" : "h-14"} transition-all duration-700 pb-6 border-b `}>
                        <div className="flex justify-between items-center">
                            <h2 className="font-light ">Color</h2>
                            <div className={`${openDropDown === "colors" ? "rotate-180" : "rotate-0"} duration-700`} onClick={() => colorToExpandSubMenu()}>
                                <RiArrowDropDownLine size={33} />
                            </div>
                        </div>
                        {openDropDown === "colors" ?
                            <SubFilterMenu dataToItrate={availableColors} dropDownState={openDropDown} setAppliedFiltration={setAppliedFiltration} appliedFiltration={appliedFiltration} />
                            : " "
                        }
                    </div>
                    <div className={`cursor-pointer ${openDropDown === "price" ? "h-24 transition-all duration-1000" : "h-14"} transition-all duration-700 pb-6 border-b `}>
                        <div className="flex justify-between items-center">
                            <h2 className="font-light ">Price</h2>
                            <div className={`${openDropDown === "price" ? "rotate-180" : "rotate-0"} duration-700`} onClick={() => priceToExpandSubMenu()}>
                                <RiArrowDropDownLine size={33} />
                            </div>
                        </div>
                        {openDropDown === "price" ?
                            <SubFilterMenu dropDownState={openDropDown} setAppliedFiltration={setAppliedFiltration} appliedFiltration={appliedFiltration} />
                            : " "
                        }
                    </div>
                    <div className={`cursor-pointer ${openDropDown === "sizes" ? "full transition-all duration-1000" : "h-14"} transition-all duration-700 pb-6 border-b `}>
                        <div className="flex justify-between items-center">
                            <h2 className="font-light ">Size</h2>
                            <div className={`${openDropDown === "sizes" ? "rotate-180" : "rotate-0"} duration-700`} onClick={() => sizeToExpandSubMenu()}>
                                <RiArrowDropDownLine size={33} />
                            </div>
                        </div>
                        {openDropDown === "sizes" ?
                            <SubFilterMenu dropDownState={openDropDown} dataToItrate={availableSizes} setAppliedFiltration={setAppliedFiltration} appliedFiltration={appliedFiltration} />
                            : " "
                        }
                    </div>
                    <div className={`cursor-pointer ${openDropDown === "productType" ? "h-52 transition-all duration-1000" : "h-14"} transition-all duration-700 pb-6 border-b `}>
                        <div className="flex justify-between items-center">
                            <h2 className="font-light ">Product Type</h2>
                            <div className={`${openDropDown === "productType" ? "rotate-180" : "rotate-0"} duration-700`} onClick={() => productTypeToExpandSubMenu()}>
                                <RiArrowDropDownLine size={33} />
                            </div>
                        </div>
                        {openDropDown === "productType" ?
                            <SubFilterMenu dataToItrate={productTypes} dropDownState={openDropDown} setAppliedFiltration={setAppliedFiltration} appliedFiltration={appliedFiltration} />
                            : " "
                        }
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => setFilterMenuBar(true)} className="flex items-center justify-center py-2 px-5 border hover:bg-gray-100 hover:border-pink-300">
                    <Image width={36} height={30} src={FilterIco} alt="FilterIcon" />
                    <p className="font-serif">
                        Filter
                    </p>
                </button>
            </div>
        </div>
    )
}