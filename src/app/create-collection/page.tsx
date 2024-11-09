import type { Metadata } from 'next';
// import { Suspense } from 'react';
import Header from '@/components/template/dashboard-layout/header';
import Footer from '@/components/template/dashboard-layout/footer';
export const metadata: Metadata = {
    title: 'Create Collection',
    description: 'Create Collection',
}

export default function CreateCollection() {
    return (
        <div>
            <Header></Header>
            <Footer></Footer>
        </div>
    )
}


