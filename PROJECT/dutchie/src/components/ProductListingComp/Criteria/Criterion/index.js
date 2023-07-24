import styles from './Criterion.module.css'

export default function Criterion({text}) {
    return (
        <p className={styles.criterion}>{text}</p>
    )
}