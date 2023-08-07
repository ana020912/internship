import React from 'react'
import HeroLayout from '@/components/HeroLayout'
import Layout from '@/components/Layout'
import styles from './SignIn.module.css'
import Link from 'next/link'
import Title from '@/components/Title'
import Form from '@/components/CheckoutComp/Form'
import CheckoutCart from '@/components/CheckoutComp/CheckoutCart'
import CheckoutLayout from '@/components/CheckoutComp/CheckoutLayout'
export default function SignIn() {
  return (
    <Layout>
      <HeroLayout bgPoz='heroBgPoz'>
        <Link href='/product-details'><Title level='h6' className='goBack' >Continue shopping</Title></Link>
      </HeroLayout>

      <CheckoutLayout>
        <Form />
      </CheckoutLayout>
    </Layout>

  )
} 
