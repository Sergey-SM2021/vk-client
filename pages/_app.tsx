import "../styles/globals.css"
import type {AppProps} from "next/app"
import {Layout} from "../src/components/Layouts/Layout"
import {useRouter} from "next/router";
import "nprogress/nprogress.css";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter()

    if (router.pathname === '/404') {
        return <Component {...pageProps} />
    }

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
