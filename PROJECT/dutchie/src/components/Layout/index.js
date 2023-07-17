import SEO from '../SEO'
import Footer from '../Footer'
import Header from '../Header'
import MegaMenu from '../MegaMenu'

export default function Layout({ children }) {
    return (
        <>
            <SEO />
            <Header />
             {children}
            <Footer />
        </>
    )
}