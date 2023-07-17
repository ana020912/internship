import styles from './Newsletter.module.css'
import InputBar from '../InputBar'
export default function Newsletter() {
    return (
        <section className=''>
            <h3 className={styles.subscribe}>Subscribe</h3>
            <p className={styles.newsletterDetails}>Don't miss out on any Dutchie news</p>
            <InputBar inputBar='mailbar' inputType='mail' inputHolder='Enter your e-mail address' />
        </section>
        
    )
}