import Title from '@/components/Title'
import styles from './CheckoutCart.module.css'
import CartProduct from '@/components/CartComp/CartProduct'
import NewPrice from '@/components/ProductListingComp/NewPrice'

export default function CheckoutCart() {
  return (
    <section className={styles.cartPos}>
      <Title level='h5'>Your cart (4 items)</Title>
      <div className={styles.itemList}>
        <div className={styles.cartItems}>
          <CartProduct className={styles.cartItem} background='btnWhite' name='Berberana Red Dragon Tempranillo' />
          <CartProduct className={styles.cartItem} background='btnWhite' name='Berberana Red Dragon Tempranillo' />
          <CartProduct className={styles.cartItem} background='btnWhite' name='Berberana Red Dragon Tempranillo' />
          <CartProduct className={styles.cartItem} background='btnWhite' name='Berberana Red Dragon Tempranillo' />
        </div>

        <div className={styles.costsFooter}>
          <div className={styles.costsFooterContainer}>
            <div className={styles.prices}>
              <div className={styles.totalPrice}>
                <p>Subtotal</p>
                <NewPrice
                  moneySymbol='$'
                  price='26.70'
                />
              </div>

              <div className={styles.totalPrice}>
                <p>Shiping</p>
                <NewPrice
                  moneySymbol='$'
                  price='4.90'
                />
              </div>
            </div>

          </div>

        </div>

        <div className={styles.total}>
          <div className={`${styles.totalPrice}`}>
            <p>Total</p>
            <NewPrice
              moneySymbol='$'
              price='26.70'
            />
          </div>
        </div>


      </div>

    </section>
  )
}
