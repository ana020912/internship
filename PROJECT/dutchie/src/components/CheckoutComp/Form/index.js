import Link from 'next/link'
import styles from './Form.module.css'
import StepperIndex from '../StepperIndex'
import Tab from '../Tab'
import { useState } from 'react'
import SignInForm from '../SignInForm'
import GuestForm from '../GuestForm'
import Title from '@/components/Title'


export default function Form() {
    // const [isActive, setIsActive] = useState({display: 2, isActive: true});
    const [isActive, setIsActive] = useState(2);


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

                <div className={styles.tabs}>
                    <button onClick={() => setIsActive(1)} className={isActive === 1 ? styles.activeTab : styles.tab}>Checkout as guest</button>
                    <button onClick={() => setIsActive(2)} className={isActive === 2  ? styles.activeTab : styles.tab} >Sign into your account</button>
                </div>

                {isActive === 1 && <SignInForm />}
                {isActive === 2 && <GuestForm />}

            </div>
        </section>

    )
}
