import styles from './purchase-info.module.css';
import TitleDetails from '../title-details';
import ButtonDetails from '../button-details';
import Button from '@/components/Button'

export default function PurchaseInfo({ title, description, price }) {

    const priceWithoutDollarSign = price.replace('$', '');
    const [price_integer, price_decimal] = priceWithoutDollarSign.split('.');

    return (
        <div className={styles.wrapper_purchase_info}>
            <div className={styles.wrapper_meta_deta}>
                <ButtonDetails className={styles.btnNew}><strong className={styles.strongText1}>NEW</strong></ButtonDetails>
                <TitleDetails level="h1">{title}</TitleDetails>
                <p className={styles.text}>{description}</p>
                <div className={styles.buttonDetails}>
                    <ButtonDetails>Free delivery on orders more than <strong className={styles.strongText2}> $39.90</strong></ButtonDetails>
                    <ButtonDetails>Arrives Wednesday, 1st of July</ButtonDetails>
                </div>

            </div>
            <div className={styles.price_tag}>
                <span className={styles.priceInteger}>${price_integer}</span>
                <sup className={`${styles.priceDecimal} ${styles.superscript}`}>{price_decimal}</sup>
            </div>
            <div className={styles.wrapper_button}>
                <Button className="btnDark btnRegular textWhite" text="Add to cart"
                    imgposition="left" imgsrc="/plus-icon-light.svg" imgwidth={16} imgheight={16} />
            </div>
        </div>
    )
}