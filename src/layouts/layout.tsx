import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="flex min-h-[53.093rem] flex-col items-center justify-between p-24">
                <div className="w-full max-w-7xl sm:max-w-4xl">{children}</div>
            </main>
            <Footer />
        </>
    )
}
