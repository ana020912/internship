import Layout from '@/components/Layout'
import styles from './DeliveryMethod.module.css'
import React from 'react'
import HeroLayout from '@/components/HeroLayout'
import Link from 'next/link'
import Title from '@/components/Title'
import CheckoutLayout from '@/components/CheckoutComp/CheckoutLayout'
import Form from '@/components/CheckoutComp/Form'
import DeliveryDetails from '@/components/CheckoutComp/DeliveryDetails'

export default function DeliveryMethod() {
  return (
    <Layout>
      <HeroLayout bgPoz='heroBgPoz'>
        <Link href='/product-details'><Title level='h6' className='goBack' >Continue shopping</Title></Link>
      </HeroLayout>

      <CheckoutLayout>
        <DeliveryDetails />
      </CheckoutLayout>
    </Layout>
  )
}
