import Image from "next/image";
import React from "react";
import { product1 } from "./data/journaldata";
import Link from "next/link";
type journaltype = {
  name: string;
  details: string;
  ImageURL: string;
  alt: string;
};
const Journalcard = () => {
  return (
    <>
      <section className="flex flex-col items-center pb-10">
        <div>
          <div className="px-5 mt-9 flex justify-between items-end">
            <h4 className="min-[590px]:text-3xl text-2xl font-bold ">
              From the journal
            </h4>
            <h1 className="text-gray-600 min-[590px]:inline hidden">
              View all
            </h1>
          </div>
          <div className="mx-6 mt-12 flex cursor-pointer flex-col items-center gap-8  min-[590px]:flex-row">
            {product1.map((item: journaltype) => (
              <div className="  w-full flex-1" key={item.name}>
                <Link href={item.name}>
                  <div className="animation_triggering_class h-auto w-auto cursor-pointer justify-center overflow-hidden">
                    <Image
                      className="hover scale_triggering_class overflow-hidden duration-[3000ms] ease-in-out hover:scale-110 hover:brightness-75 lg:h-[12.5rem] lg:w-[24rem]"
                      width={384}
                      height={200}
                      src={item.ImageURL}
                      alt={item.alt}
                    />
                  </div>
                </Link>
                <div>
                  <h3 className="mt-5 text-gray-600 text-[14px] min-[590px]:text-[17px]">
                    {item.name}
                  </h3>
                </div>
                <div className="max-w-xs">
                  <p className="text-[19px] min-[590px]:text-[23px]  text-gray-700">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journalcard;
