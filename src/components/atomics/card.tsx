'use client'

export default function Card({ className, children }: { className: string, children: React.ReactNode }) {
    return (
        <div className={`${className} bg-black`}> 
            {children}
        </div>
    )
}