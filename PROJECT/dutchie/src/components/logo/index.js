import Image from "next/image";
import styles from './Logo.module.css'

export default function Logo({source}) {
    return (
        <Image  className={styles.logo} 
                src={source}
                width={143}
                height={28}
                alt='logo' 
            />
    )
}