import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '@/layouts/layout'
import { Analytics } from '@vercel/analytics/react'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
                <Analytics />
            </Layout>
        </>
    )
}
