import Input from '@/components/Contact/Formular/Input'
import BackButton from '../BackButton'
import CheckoutDetailsLayout from '../CheckoutDetailsLayout'
import CheckoutTitle from '../CheckoutTitle'
import DeliveryMethodCard from '../DeliveryMethodCard'
import styles from './DeliveryDetails.module.css'

import React from 'react'
import DeliveryPaymentLayout from '../DeliveryPaymentLayout'

export default function DeliveryDetails() {
    return (
        <DeliveryPaymentLayout backBtnText='Back to personal details' titleText='Delivery Method' titleImage={styles.titleImage}>
            <DeliveryMethodCard price='4.00 €' date='Saturday 27th' />
            <DeliveryMethodCard price='4.00 €' date='Saturday 27th' />
            <DeliveryMethodCard price='4.00 €' date='Saturday 27th' />
            <Input inputType='submit' value='Proceed' className={`${styles.inputField} btnDark textWhite`} />
        </DeliveryPaymentLayout>
    )
}
