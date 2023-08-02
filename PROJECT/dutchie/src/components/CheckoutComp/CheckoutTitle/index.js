import styles from './CheckoutTitle.module.css'


export default function CheckoutTitle({text, titleStyle}) {
  return (
    <div className={`${titleStyle} ${styles.checkoutTitle}`}>
        {text}
    </div>
  )
}
