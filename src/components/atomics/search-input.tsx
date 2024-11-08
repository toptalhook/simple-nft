'use client'
import { CiSearch } from "react-icons/ci";
import { SearchInputType } from "@/components/types/SearchInputType";
export default function SearchInput({className, placeholder}: SearchInputType) {
    return (
        <div className={`${className}  flex gap-[11px] pt-[7px] pb-[7px] pl-[12px] pr-[12px] border-[#4E4E4E] border-[2px] focus:border-[#333333] transition-all duration-300 duration-300`}>
            <CiSearch className="text-[#4E4E4E] w-[18px] h-[18px]" />
            <input  
                type="text" 
                placeholder={placeholder} 
                className='text-[#4E4E4E] placeholder-[#4E4E4E] text-[12px] bg-transparent outline-none font-archivo' 
            /> 
        </div>
    )
}