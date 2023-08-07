import Title from '@/components/Title'
import CheckoutDetailsLayout from '../CheckoutDetailsLayout'
import styles from './ConfirmationPage.module.css'
import Image from 'next/image'
import Input from '@/components/Contact/Formular/Input'
import Link from 'next/link'

export default function ConfirmationPage() {
    return (
        <section className={styles.formPos}>
            <Title level='h5'>Fill it in and you're good to go!</Title>
            <div className={styles.form}>
                <div className={styles.succesfullPayment}>
                    <p>Payment was succesfull</p>
                </div>

                <div className={styles.content}>
                    <Image
                        src={'/confetti.svg'}
                        width={108}
                        height={108}
                    />
                    <Title level='h5' className={styles.thankYouTitle}>Thank you for your purchase!</Title>
                    <p>All of your lekker items should be<br/> with you before 1st of July 2020. 🚚</p>
                    
                    <Input inputType='submit' value='Download or print your bon' className={`${styles.inputField} btnDark textWhite`} />
                    <button className={styles.backBtn}>
                        <Link href='/' className={styles.backBtnColor}>Go back to homepage</Link>
                    </button>
                </div>

            </div>

        </section>
    )
}