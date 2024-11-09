'use client'
import Header from '@/components/template/dashboard-layout/header'
import Footer from '@/components/template/dashboard-layout/footer'
type DasshBoardLayoutType = {
    children: React.ReactNode
}

export default function DasshBoardLayout({ children }: DasshBoardLayoutType) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

