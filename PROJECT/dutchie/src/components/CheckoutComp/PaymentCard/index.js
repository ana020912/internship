import React from 'react'
import styles from './PaymentCard.module.css'
import Image from 'next/image'
export default function PaymentCard({ paymentMethod, paymentSymbol }) {
    return (
        <div className={styles.paymentCard}>
            <div className={styles.method}>
                <Image 
                    src={paymentSymbol}
                    width={24}
                    height={24}
                />
                {paymentMethod}
            </div>

            <input type='radio' />
        </div>
    )
}
