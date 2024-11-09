'use client'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className='pl-[42px] pr-[42px] pt-[50px] pb-[50px] flex flex-col '>
            <div className='flex items-center justify-center gap-[26px]'>
                <FaTelegramPlane className='text-white w-[33px] h-[28px]' />
                <FaXTwitter className='text-white w-[28px] h-[27px]' />
                <FaDiscord className='text-white w-[39px] h-[28px]' />
            </div>
            <div className='flex flex-col pt-[40px] gap-[40px]'>     
                <div className="flex flex-col">
                    <h2 className='text-white  font-silkscreen text-[32px] pt-[10px]'>EXPLORE </h2>
                    <a className="font-spline-sans-mono text-[32px] underline --light"> Home </a>
                    <a className="font-spline-sans-mono text-[32px] underline --light"> Features </a>
                    <a className="font-spline-sans-mono text-[32px] text-[#555555] pointer-events-none --light"> RoadMap </a>  
                </div>
                <div className="flex flex-col">
                    <h2 className='text-white  font-silkscreen text-[32px] pt-[10px]'> LEARN</h2>
                    <a className="font-spline-sans-mono text-[32px] underline --light"> FAQ </a>
                    <a className="font-spline-sans-mono text-[32px] text-[#555555] pointer-events-none --light"> Blog </a>
                    <a className="font-spline-sans-mono text-[32px] text-[#555555] pointer-events-none --light"> Resources </a>  
                </div>
                <div className="flex flex-col">
                    <h2 className='text-white  font-silkscreen text-[32px] pt-[10px]'> CONTACT</h2>
                    <a className="font-spline-sans-mono text-[32px] underline --light"> Telegram </a>
                    <a className="font-spline-sans-mono text-[32px] underline --light"> Twitter </a>
                    <a className="font-spline-sans-mono text-[32px] underline --light"> Email </a>  
                </div>        
            </div>
            <div className="flex flex-col pt-[70px]">
                <p className="font-silkscreen text-[13px]">© 2024 SimpleNFT</p>
                <p className="font-silkscreen text-[13px]">Created by vorpal team, August 15, 2024</p>
            </div>
        </footer>
    )
}