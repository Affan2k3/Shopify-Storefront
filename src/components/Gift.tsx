import { FaLongArrowAltRight } from 'react-icons/fa'
import { data } from './Databse'
import BlackButton from './shared/Button';

interface giftType {
    subTitle: string,
    title: string,
    desc: string,
    btn: string,
    imgLeft: string,
    altLeft: string,
    imgRight: string
    altRight: string,
}

const giftData: giftType = data;

export default function Gift() {
    return (
        <div className='bg-white flex md:flex-row flex-col-reverse m-auto max-w-6xl my-32 justify-between px-[3%]'>
            <div className=' md:w-[50%] w-full px-3 md:pr-20 m-auto mt-10 md:mt-0 lg:mt-16'>
                <h2 className=' text-[17px] tracking-widest text-gray-700'>{giftData.subTitle}</h2>
                <h1 className=' text-[30px] font-bold leading-[35px] mt-[5px]'>{giftData.title}</h1>
                <p className=' text-[16px] text-gray-700 mt-[20px]'>{giftData.desc}</p>
                <BlackButton text={giftData.btn} />
            </div>

            <div className='flex'>
                <div className=' m-auto z-10'>
                    <img src={giftData.imgLeft} alt={giftData.altLeft} className=' md:translate-x-[3rem] translate-x-[1rem] ml:translate-y-12 translate-y-9' />
                </div>
                <div>
                    <img src={giftData.imgRight} alt={giftData.altRight} className='md:translate-x-0 -translate-x-[1rem]' />
                </div>
            </div>
        </div>
    )
}
