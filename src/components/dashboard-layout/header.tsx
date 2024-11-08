'use client'

import Image from 'next/image'
import SearchInput from '@/components/atomics/search-input'
import { HiOutlineBars2 } from "react-icons/hi2";

export default function Header() {
    return (
        <header className='w-full  flex items-center justify-between pt-[20px] pl-[10px] pr-[10px] pb-[10px] sm:p-[20px] gap-[7px] sm:gap-[10px] sl:gap-[20px] ' >
            <Image  
                src="/logo.svg"
                alt="logo" 
                width={51} 
                height={51} 
            />
            <SearchInput 
                className='w-full'
                placeholder='Search' 
            />
            <HiOutlineBars2 className='text-[#4E4E4E] w-[51px] h-[31px] hover:cursor-pointer' />
        </header>
    )
}

