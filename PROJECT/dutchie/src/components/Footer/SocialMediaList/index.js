import styles from './SocialMediaList.module.css'
import SocialMedia from '../SocialMedia'

export default function SocialMediaList() {
    return (
        <section>
            <h3 className={styles.followTitle}>Follow Dutchie</h3>
            <p className={styles.socialMediaDetails}>Eget at ac dapibus felis dolor amet.</p>
            <ul className={styles.socialMediaList}>
                <li>
                    <SocialMedia image='/instagram.svg'/>
                </li>
                <li>
                    <SocialMedia image='/mail.svg'/>
                </li>
                <li>
                    <SocialMedia image='/mail.svg'/>
                </li>
                <li>
                    <SocialMedia image='/mail.svg'/>
                </li>
                <li>
                    <SocialMedia image='/mail.svg'/>
                </li>
            </ul>
        </section>
    )
}