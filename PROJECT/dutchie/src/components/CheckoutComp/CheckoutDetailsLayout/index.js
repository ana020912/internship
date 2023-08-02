import Title from '@/components/Title'
import styles from './DetailsLayout.module.css'

import React from 'react'
import StepperIndex from '../StepperIndex'
import Link from 'next/link'

export default function CheckoutDetailsLayout({ children }) {
    return (
        <section className={styles.formPos}>
            <Title level='h5'>Fill it in and you're good to go!</Title>
            <div className={styles.form}>
                <div className={styles.stepper}>
                    <div className={styles.stepperIndex}>
                        <StepperIndex bgColor='btnLight' index='1' />
                        <Link href='#'>Personal Details</Link>
                    </div>
                    -
                    <div className={styles.stepperIndex}>
                        <StepperIndex bgColor='btnLight' index='2' />
                        <Link href='#'>Delivery Details</Link>
                    </div>
                    -
                    <div className={styles.stepperIndex}>
                        <StepperIndex bgColor='btnLight' index='3' />
                        <Link href='#'>Payment</Link>
                    </div>

                </div>
                {children}
            </div>
        </section>
    )
}
