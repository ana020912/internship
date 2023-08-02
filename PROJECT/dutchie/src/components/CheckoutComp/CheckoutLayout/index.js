import CheckoutCart from '../CheckoutCart'
import styles from './CheckoutLayout.module.css'


export default function CheckoutLayout({children}) {
  return (
    <main className={styles.mainLayout}>
        {children}
        <CheckoutCart />
    </main>
  )
}
