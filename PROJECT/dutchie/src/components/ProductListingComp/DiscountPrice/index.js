import styles from './DiscountPrice.module.css'

export default function DiscountPrice({price, className}) {
    return (
        <div className={`${styles.discountPrice} ${className}`}>
            {price} %
        </div>
    )
}