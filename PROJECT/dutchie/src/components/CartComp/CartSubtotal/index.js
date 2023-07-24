import styles from './CartSubtotal.module.css'
import Price from '../../ProductListingComp/NewPrice'
export default function CartSubtotal() {
    return (
        <section className={styles.cartSubtotal}>
            <div className={styles.upperLayout}>
                <p>Cart Subtotal</p>
                <Price 
                    moneySymbol='$'
                    price='26.70'
                />
            </div>

            <div className={styles.downLayout}>
                
            </div>
        </section>
    )
}