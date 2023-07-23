import styles from './DiscountPrice.module.css'

export default function DiscountPrice({price, className, display}) {
    return (
        <div className={`${styles.discountPrice} ${className} ${display}`}>
            {price} 
        </div>
    )
}