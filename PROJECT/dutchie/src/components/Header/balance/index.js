import Link from 'next/link'
import styles from './Balance.module.css'

export default function Balance({currentSold}) {
    return (
        <Link href='#' className={styles.balance}>
            {currentSold}
       </Link>
       );
    
}