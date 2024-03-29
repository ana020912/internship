import CartContextProvider from '@/contexts/CartContext'
import Layout from '../components/Layout'
import '../styles/globals.css'
export default function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>

  )
}