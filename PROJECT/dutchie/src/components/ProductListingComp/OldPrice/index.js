import styles from './OldPrice.module.css'

export default function OldPrice({price, display}) {
    return  (
        <s className={`${styles.oldPrice} ${display}`}>{price}</s>
    )
}