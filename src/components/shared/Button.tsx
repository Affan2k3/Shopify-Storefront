import React from "react";
import { FaLongArrowAltRight } from 'react-icons/fa'


export default function BlackButton({ text }: { text: string }) {
    return (
        <button className='group overflow-hidden text-white flex bg-[#111111] font-bold pl-[20px] py-[12px] mt-[20px] transition-all delay-300 duration-1000'>
            <span className="transition-all duration-300 group-hover:pr-[35px]">
                {text}
            </span>
            <FaLongArrowAltRight className="relative -right-20 text-2xl text-white transition-all duration-300 group-hover:right-5" />
        </button>
    )
}