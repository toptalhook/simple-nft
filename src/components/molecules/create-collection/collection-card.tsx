'use client'
import { CollectionCardType } from '@/components/types/CollectionCardType'
import Image from 'next/image'
export default function CollectionCard({ image, name, value, totalMintCount, currentMintedCount }: CollectionCardType) {
    // Format name to show first 6 chars, ... and last 3 chars
    const formatName = (name: string) => {
        if (name.length <= 9) return name;
        return `${name.slice(0, 6)}...${name.slice(-3)}`;
    };

    return (
        <div>
            <Image 
                src={image}
                alt={name}
                width={153}
                height={153}
            />
            <h1 className='font-silkscreen text-[20px] text-black'>{formatName(name)}</h1>
            <p className='font-silkscreen text-[20px] --bold text-[#0099FE]'>{value} TON</p>
            <p className='font-spline-sans-mono text-[16px] text-black'>{currentMintedCount}/{totalMintCount}</p>
        </div>
    )
}