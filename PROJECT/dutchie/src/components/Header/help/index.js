import Link from 'next/link'
import styles from './Help.module.css'
export default function HelpOption({option}) {
    return (
        <>
            <li ><Link className={styles.help} href='#'>{option}</Link></li>
        </>
    )
}