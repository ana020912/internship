import styles from './Rights.module.css'

export default function Rights({rights}) {
    return (
        <p className={styles.rights}>{rights}</p>
    )
}