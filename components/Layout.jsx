import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Udaan</title>
                <meta name='description' content="Udaan (meaning flight) is the University of Illinois' premier Bollywood Fusion Dance competition where collegiate dance teams from all over the nation will come together on UIUCs campus not only to compete for a title, but also to spread awareness of South Asian Culture. As an organization, we propel the next generation of trailblazers and fly high with our spirit for dance"/>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/UdaanLogo.png' />
            </Head>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout