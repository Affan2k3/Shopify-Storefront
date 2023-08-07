import Image from "next/image";
import { product } from "./data/cardgriddata";
import Link from "next/link";

type Cardstype = {
  name: string;
  details: string;
  ImageURL: string;
  button: string;
  alt: string;
};

export default function Cardgrid() {
  return (
    <section className="flex  items-center justify-center bg-white">
      <div className="mx-6 mt-12 flex cursor-pointer flex-col items-center gap-8  min-[590px]:flex-row">
        {product.map((item: Cardstype) => (
          <div className=" w-full flex-1 mb-5" key={item.name}>
            <Link href={item.name} className={``}>
              <div className="animation_triggering_class h-auto w-auto cursor-pointer justify-center overflow-hidden">
                <Image
                  className="hover scale_triggering_class overflow-hidden duration-[3000ms] ease-in-out hover:scale-110 hover:brightness-75 lg:h-[13.5rem] lg:w-[24rem]"
                  width={384}
                  height={200}
                  src={item.ImageURL}
                  alt={item.alt}
                />
              </div>
            </Link>
            <div>
              <h3 className="my-4 text-[17.4px] font-bold">{item.name}</h3>
            </div>
            <div className="max-w-xs">
              <p className="my-4  min-[590px]:text-[15px]  text-gray-600">
                {item.details}
              </p>
            </div>
            <button className="border px-[14px] py-2 text-[14px] font-bold ">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
