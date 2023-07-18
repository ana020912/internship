import styles from './Button.module.css'

export default function Button({ imgposition, text, imgsrc, className='' }) {
    return (
        <button className={className}>
            {imgposition === "left" && (
                <img src={imgsrc} className={styles.iconLeft} alt="icon" />
            )}
            {text}
            {imgposition === "right" && (
                <img src={imgsrc} className={styles.iconRight} alt="icon" />
            )}
        </button>
    )
}