import React from 'react'
import CheckoutDetailsLayout from '../CheckoutDetailsLayout'
import BackButton from '../BackButton'
import CheckoutTitle from '../CheckoutTitle'
import styles from './DeliveryPaymentLayout.module.css'
import PaymentCard from '../PaymentCard'
import AcceptedCards from '../AcceptedCards'


export default function DeliveryPaymentLayout({ backBtnText, titleText, titleImage, children }) {
    return (
        <CheckoutDetailsLayout>
            <div className={styles.deliveryDetails}>
                <BackButton text={backBtnText} />
                <div className={styles.separator}></div>

                <div>
                    <div className={styles.paymentPages}>
                        <CheckoutTitle titleStyle={`${titleImage} ${styles.title}`} text={titleText} />
                    </div>
                    <div className={styles.deliveryCards}>
                        {children}
                    </div>
                </div>
            </div>
        </CheckoutDetailsLayout>
    )
}
