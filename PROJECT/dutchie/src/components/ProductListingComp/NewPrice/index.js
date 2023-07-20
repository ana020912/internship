import styles from './NewPrice.module.css'

export default function NewPrice({price, moneySymbol}) {
    return (
        <div className={styles.newPrice}>
           <span className={styles.moneySymbol}>{moneySymbol}</span> {price}
        </div>
    )
}