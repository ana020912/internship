import SEO from '../SEO'
import Footer from '../Footer'
import Header from '../Header'

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