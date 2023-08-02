import CheckoutLayout from '@/components/CheckoutComp/CheckoutLayout'
import DeliveryPaymentLayout from '@/components/CheckoutComp/DeliveryPaymentLayout'
import HeroLayout from '@/components/HeroLayout'
import Layout from '@/components/Layout'
import Title from '@/components/Title'
import Link from 'next/link'
import React from 'react'
import styles from './PaymentMethod.module.css'
import PaymentCard from '@/components/CheckoutComp/PaymentCard'
import AcceptedCards from '@/components/CheckoutComp/AcceptedCards'
import PaymentDetails from '@/components/CheckoutComp/PaymentDetails'
export default function PaymentMethod() {
  return (
    <Layout>
      <HeroLayout bgPoz='heroBgPoz'>
        <Link href='/product-details'><Title level='h6' className='goBack' >Continue shopping</Title></Link>
      </HeroLayout>

      <CheckoutLayout>
        <PaymentDetails />
      </CheckoutLayout>
    </Layout>
  )
}
