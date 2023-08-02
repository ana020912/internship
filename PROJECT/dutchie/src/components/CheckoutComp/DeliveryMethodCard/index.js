import styles from './DeliveryMethodCard.module.css'

export default function DeliveryMethodCard({ price, date }) {
    return (
        <div className={styles.deliveryMethodCard}>
            <div>
                <p>{price} - Standard delivery</p>
                <p>Delivered before {date} </p>
            </div>

            <input type='radio' />
        </div>
    )
}
