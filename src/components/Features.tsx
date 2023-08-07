import Image from "next/image"
import { Feature, topFeature } from "./Databse"


interface featureType {
    id: number;
    src: string;
    title: string;
    desc: string;
    alt: string
}

interface topFeatureType {
    title: string;
    src: string;
    alt: string
}

const FeatureData: topFeatureType = topFeature;


export default function Features() {
    return (
        <>
            <div className=' mt-[55px]'>
                <h1 className=' mx-5 text-[31px] tracking-[0.15em] text-center'>{FeatureData.title}</h1>
            </div>
            <Image src={FeatureData .src} alt={FeatureData.alt} width={230} height={200} className=' m-auto mt-4'/>
            <div className="grid md:px-20 px-10 md:grid-cols-3 grid-cols-1 text-center max-w-[1330px] m-auto md:mt-28 mt-12 md:gap-y-28 gap-y-12 gap-x-16">
              {Feature.map((elem:featureType) => (
                <div className="" key={elem.id}>
                    <Image src={elem.src} alt={elem.alt} width={100} height={200} className='m-auto'/>
                    <h1 className=" text-[27px] font-bold mt-5">{elem.title}</h1>
                    <p className="mt-2 font-medium text-gray-700">{elem.desc}</p>
                </div>
                ))}
            </div>
        </>
    )
}
