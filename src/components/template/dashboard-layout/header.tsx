'use client'

import Image from 'next/image'
import SearchInput from '@/components/atomics/search-input'
import { HiOutlineBars2 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className='fixed top-0 w-full flex items-center justify-between pt-[20px] pl-[10px] pr-[10px] pb-[10px] sm:p-[20px] gap-[7px] sm:gap-[10px] sl:gap-[20px] bg-black'>
                <Image  
                    src="/logo.svg"
                    alt="logo" 
                    width={51} 
                    height={51} 
                    className='hover:cursor-pointer'
                />
                <SearchInput 
                    className='w-full'
                    placeholder='Search' 
                />
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="z-20"
                >
                    {isMenuOpen ? (
                        <HiXMark className='text-[#4E4E4E] w-[51px] h-[31px] hover:cursor-pointer transition-all duration-300' />
                    ) : (
                        <HiOutlineBars2 className='text-[#4E4E4E] w-[51px] h-[31px] hover:cursor-pointer transition-all duration-300' />
                    )}
                </button>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: '0%' }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 right-0 h-screen w-full bg-black shadow-lg z-10"
                        >
                            <div className="absolute top-[20px] left-[10px] sm:left-[20px]">
                                <Image  
                                    src="/logo.svg"
                                    alt="logo" 
                                    width={51} 
                                    height={51} 
                                />
                            </div>
                          <div className='relative h-full'>
                            <div className="mt-[76px] border-[#1E1E1E] border-t-[1px] pt-[16px] pl-[20px] sl:pl-[20px] flex flex-col gap-[20px]">
                                <div className='hover:cursor-pointer font-silkscreen text-[25px] sl:text-[30px]'>
                                    <span>HOME</span>
                                </div>
                                <div className='hover:cursor-pointer font-silkscreen text-[25px] sl:text-[30px]'>
                                    <span>CONNECT WALLET</span>
                                </div>
                                <div className='hover:cursor-pointer font-silkscreen text-[25px] sl:text-[30px]'>
                                    <span>MY COLLECTIONS</span>
                                </div>
                                <div className='hover:cursor-pointer font-silkscreen text-[25px] sl:text-[30px]'>
                                    <span>CREATE COLLECTION</span>
                                </div>
                                <div className='hover:cursor-pointer font-silkscreen text-[25px] sl:text-[30px]'>
                                    <span>VERIFY TELEGRAM</span>
                                </div>
                                <div className='hover:cursor-pointer font-silkscreen text-[25px] sl:text-[30px]'>
                                    <span>DOMAINS</span>
                                </div>
                                <div className='hover:cursor-pointer font-silkscreen text-[25px] sl:text-[30px]'>
                                    <span>SETTINGS</span>
                                </div>
                            </div>
                            <div className='absolute bottom-[120px] w-full flex items-center justify-center gap-[26px]'>
                                <FaTelegramPlane className='text-white w-[33px] h-[28px]' />
                                <FaXTwitter className='text-white w-[28px] h-[27px]' />
                                <FaDiscord className='text-white w-[39px] h-[28px]' />
                            </div>
                          </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

           
        </>
    )
}

