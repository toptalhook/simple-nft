import type { Metadata } from 'next';
// import { Suspense } from 'react';
import Header from '@/components/dashboard-layout/header';
import Footer from '@/components/dashboard-layout/footer';
export const metadata: Metadata = {
    title: 'Create Collection',
    description: 'Create Collection',
}

export default function CreateCollection() {
    return (
        <div>
            <Header /> 
            <Footer/>

        </div>
    )
}
