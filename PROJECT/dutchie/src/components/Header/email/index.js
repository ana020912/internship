import styles from './Email.module.css'

export default function Email({mail}) {
    return (
        <a className={styles.email} href={`@mailto:${mail}`}>{mail}</a>
    )
}