import styles from './Formular.module.css'
import Input from './Input'

export default function Formular({ message }) {
    return (
        <section className={styles.formular}>
            <div>
                <div className={styles.message}>
                    {message}
                </div>

                <div className={styles.formContainer}>
                    <form className={styles.formElements}>
                        <Input type='text' placeholder='Full name' className={styles.inputPadding} />
                        <Input type='mail' placeholder='E-mail' className={styles.inputPadding} />
                        <Input type='text' placeholder='Message' className={styles.textArea} />
                        <Input className={`${styles.submit} ${styles.inputPadding}`} type='submit' value='Send message' />
                    </form>
                </div>
            </div>
        </section>
    )
}