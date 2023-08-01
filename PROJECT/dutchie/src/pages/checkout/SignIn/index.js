import React from 'react'
import HeroLayout from '@/components/HeroLayout'
import Layout from '@/components/Layout'
import styles from './SignIn.module.css'
import Link from 'next/link'
import Title from '@/components/Title'
import Form from '@/components/CheckoutComp/Form'
export default function SignIn() {
  return (
    <Layout>
      <HeroLayout bgPoz='heroBgPoz'>
        <Link href='/product-details'><Title level='h6' className='goBack' >Continue shopping</Title></Link>
      </HeroLayout>

      <main>
        <Form />
        <section className={styles.cart}>
                
        </section>
      </main>
    </Layout>

  )
} 
