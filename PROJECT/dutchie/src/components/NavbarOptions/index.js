import styles from './NavbarOptions.module.css'
import NavbarOption from '../Header/sec-navbar-option'
export default function Navbar() {
    return (
        <div className={styles.secnav}>
                        <NavbarOption Class={`${styles.navbaroption} ${styles.navlink}`} optionName='Foods' />
                        <NavbarOption Class={`${styles.navbaroption} ${styles.navlink}`} optionName='Products' />
                        <NavbarOption Class={`${styles.navbaroption}`} optionName='Deals' />
                    </div>
    )
}