import Title from '@/components/Title'
import styles from './CartItems.module.css'
import Button from '@/components/Button'

export default function CartItems() {
    return (
        <section>
            <div className={styles.upperLayout}>
                <Title className={styles.title} level="h5">Items in your cart</Title>
                <Button 
                    text='Proceed to checkout'
                    className={`btnDark textWhite ${styles.btnStyle}`}
                />
            </div>

        </section>

    )
}