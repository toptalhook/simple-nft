'use client'
import Image from 'next/image'
import { DailyNewsCardType } from '@/components/types/DailyNewsCardType'

export default function DailyNewsCard({ title, description, image }: DailyNewsCardType) {
    return(
        <div>
            <Image 
                src={image} 
                alt={title} 
                width={153} 
                height={153} 
            />
            <h1 className='font-silkscreen text-[14px] text-white'>{title}</h1>
            <p className='pt-[20px] font-spline-sans-mono text-[10px] text-[#757575]'>{description}</p>
        </div>
    )
}