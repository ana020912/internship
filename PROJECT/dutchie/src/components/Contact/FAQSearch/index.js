import Image from 'next/image'
import styles from './FAQSearch.module.css'
import Title from '@/components/Title'
import Searchbar from '@/components/InputBar'
import Input from '../Formular/Input'

export default function FAQSearch() {
    return (
        <section className={styles.faqForm}>
            <Image
                className={styles.image}
                src='/img-icon.svg'
                width={64}
                height={64}
            />

            <div>
                <Title level='h5'>Get all the answers right away.</Title>
                <p className={styles.subtitle}>
                    Ask a question and get all of your<br />answers right away.
                </p>
            </div>
            <Searchbar inputBar={styles.search} inputType='text' inputHolder='e.g. When will my order arrive?' />

            <p className={styles.contactMessage}>Didn't find your answer? Give it a call or message.</p>

            <div className={styles.contacts}>
                <button className={`btnRemoveBorder ${styles.contact}`}>+1 202-555-0173</button>
                <button className={`btnRemoveBorder ${styles.contact}`}>lekker@dutchie.com</button>
            </div>

        </section>
    )
}