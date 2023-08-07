import Layout from '@/components/Layout'
import styles from './ThankYou.module.css'
import HeroLayout from '@/components/HeroLayout'
import Link from 'next/link'
import CheckoutLayout from '@/components/CheckoutComp/CheckoutLayout'
import Title from '@/components/Title'
import ConfirmationPage from '@/components/CheckoutComp/ConfirmationPage'

export default function ThankYou() {
    return (
        <Layout>
        <HeroLayout bgPoz='heroBgPoz'>
          <Link href='/product-details'><Title level='h6' className='goBack' >Continue shopping</Title></Link>
        </HeroLayout>
  
        <CheckoutLayout>
            <ConfirmationPage />
        </CheckoutLayout>
      </Layout>
    )
}