import Link from 'next/link'
import styles from './Form.module.css'
import StepperIndex from '../StepperIndex'
import Tab from '../Tab'
import { useState } from 'react'
import SignInForm from '../SignInForm'
import GuestForm from '../GuestForm'
import Title from '@/components/Title'


export default function Form() {
    const [isActive, setIsActive] = useState({display: 2, isActive: true});

    function changeState1() {
        setIsActive({
            display: 1,
            isActive: !isActive
        });

    }

    function changeState2() {
        setIsActive({
            display: 2,
            isActive: !isActive
        });

    }
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
                    <Tab handleClick={changeState1} isActive={!isActive} text='Checkout as guest' />
                    <Tab handleClick={changeState2} isActive={isActive} text='Sign into your account' />
                </div>

                {isActive.display === 1 && <SignInForm />}
                {isActive.display === 2 && <GuestForm />}

            </div>
        </section>

    )
}
