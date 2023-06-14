import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <Toaster
                toastOptions={{
                    success: {
                        className: '!bg-green-600 !text-white',
                    },
                    error: {
                        className: '!bg-red-600 !text-white',
                    },
                }}
            />
            <main className="flex min-h-[53.093rem] flex-col items-center justify-between p-8 sm:p-24">
                <div className="w-full max-w-7xl sm:max-w-4xl">{children}</div>
            </main>
            <Footer />
        </>
    )
}
