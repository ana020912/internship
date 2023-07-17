import Email from './../email'
import Ads from './../ads'
import HelpOption from './../help'
import styles from './PreHeader.module.css'
export default function PreHeader() {
    return (
        <section className={styles.preheader}>
            <div className='container'>
                <div className={styles.preheader__container}>
                    <Email mail='info@dutchie.nl' />
                    <Ads part1='40% off dutch sweets' part2='only today!' />
                    <ul className={styles.help}>
                        <HelpOption option='Contact' />
                        <HelpOption option='FAQ' />
                    </ul>
                </div>
            </div>

        </section>
    )
}