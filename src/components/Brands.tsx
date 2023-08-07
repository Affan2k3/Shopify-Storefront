import Image from 'next/image'
import React from 'react'
import { Brand } from './Databse'

interface brandType {
    title: string,
    src: string,
    alt: string
}

const brandData: brandType = Brand;


export default function Brands() {
  return (
    <div className='my-20 mx-10'>
        <h1 className=' text-2xl font-bold text-center'>{brandData.title}</h1>
        <Image src={brandData.src} alt={brandData.alt} width={900} height={500} className=' m-auto mt-6' />
    </div>
  )
}
