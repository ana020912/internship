import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import HeroHeader from '@/components/HeroHeader'
import CategoryGrid from '@/components/CategoryGrid'
import Offers from '@/components/Offers'
import Contact from '@/components/Contact'
import ProductSlider from '@/components/product-slider copy'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <HeroHeader />
        <CategoryGrid />
        <ProductSlider />
        <Offers />
        <Contact />
      </Layout>
    </>
  )
}
