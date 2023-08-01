import Title from '@/components/Title'
import styles from './CheckoutCart.module.css'
import CartProduct from '@/components/CartComp/CartProduct'

export default function CheckoutCart() {
  return (
    <section className={styles.cartPos}>
        <Title level='h5'>Your cart (4 items)</Title>
        <div className={styles.cartItems}>
            <CartProduct background='btnWhite' name='cv' />
            <CartProduct background='btnWhite' name='cv' />
            <CartProduct background='btnWhite' name='cv' />
            <CartProduct background='btnWhite' name='cv' />
         
        </div>
    </section>
  )
}
