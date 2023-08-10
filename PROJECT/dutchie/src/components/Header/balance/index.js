import Link from 'next/link'
import styles from './Balance.module.css'

export default function Balance({currentSold}) {
    return (
        <Link href='/cart' className={styles.balance}>
            {currentSold}
       </Link>
       );
    
}