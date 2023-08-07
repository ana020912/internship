import styles from './CartSubtotal.module.css'
import Price from '../../ProductListingComp/NewPrice'
import CartProduct from '../CartProduct'
import NewPrice from '../../ProductListingComp/NewPrice'
import CartItems from '../CartItems'
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

            <div className={styles.lowerLayout}>
                <CartProduct
                    imgsrc='/img-item-icon.svg'
                    background='btnTransparent'
                    name='Berberana Red Dragon Tempranillo'
                />
                <CartProduct
                    imgsrc='/img-item-icon.svg'
                    background='btnTransparent'
                    name='Berberana Red Dragon Tempranillo'
                />
                <CartProduct
                    imgsrc='/img-item-icon.svg'
                    background='btnTransparent'
                    name='Berberana Red Dragon Tempranillo'
                />
                <div className={styles.lastProduct}>
                    <CartProduct
                        imgsrc='/img-item-icon.svg'
                        background='btnTransparent'
                        name='Berberana Red Dragon Tempranillo'
                    />
                </div>


            </div>
        </section>
    )
}