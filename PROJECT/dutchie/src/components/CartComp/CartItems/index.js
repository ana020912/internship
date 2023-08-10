import Title from '@/components/Title'
import styles from './CartItems.module.css'
import Button from '@/components/Button'
import CartProduct from '../CartProduct'
import Link from 'next/link'

export default function CartItems() {
    return (
        <section className={styles.cardItems}>
            <div className={styles.upperLayout}>
                <Title className={styles.title} level="h5">Items in your cart</Title>
                <Link href='/checkout/SignIn'>
                    <Button
                        text='Proceed to checkout'
                        className={`btnDark textWhite ${styles.btnStyle}`}
                    />
                </Link>
            </div>
        </section>

    )
}