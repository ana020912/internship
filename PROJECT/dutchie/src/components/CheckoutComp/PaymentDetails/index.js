import React from 'react'
import DeliveryPaymentLayout from '../DeliveryPaymentLayout'
import PaymentCard from '../PaymentCard'
import AcceptedCards from '../AcceptedCards'
import styles from './PaymentDetails.module.css'
export default function PaymentDetails() {
  return (
    <DeliveryPaymentLayout backBtnText='Back to delivery method' titleText='Payment Method' titleImage={styles.titleImage}>
          <PaymentCard paymentMethod='Card' paymentSymbol='/card-dark.svg' />
          <PaymentCard paymentMethod='PayPal' paymentSymbol='/PayPal.svg' />
          <PaymentCard paymentMethod='ApplePay' paymentSymbol='/Apple.svg' />
          <PaymentCard paymentMethod='GooglePay' paymentSymbol='/Google.svg' />
          <AcceptedCards />
        </DeliveryPaymentLayout>
  )
}
