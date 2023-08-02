import Link from 'next/link'
import styles from './Form.module.css'
import StepperIndex from '../StepperIndex'
import { useState } from 'react'
import SignInForm from '../SignInForm'
import GuestForm from '../GuestForm'
import Title from '@/components/Title'
import CheckoutDetailsLayout from '../CheckoutDetailsLayout'


export default function Form() {
    const [isActive, setIsActive] = useState(2);

    return (
        <CheckoutDetailsLayout>
            <div>
                <button onClick={() => setIsActive(1)} className={isActive === 1 ? styles.activeTab : styles.tab}>Checkout as guest</button>
                <button onClick={() => setIsActive(2)} className={isActive === 2 ? styles.activeTab : styles.tab} >Sign into your account</button>
            </div>

            {isActive === 1 && <SignInForm />}
            {isActive === 2 && <GuestForm />}
        </CheckoutDetailsLayout>

    )
}


