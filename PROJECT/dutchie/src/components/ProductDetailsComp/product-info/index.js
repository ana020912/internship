import Title from '@/components/Title';
import TitleDetails from '../title-details';
import styles from './product-info.module.css';

export default function ProductInfo({titleDesc, desc, descList, titleChar, char}) {
    return (
        <div className={styles.wrapper_details}>
            <div className={styles.description}>
                <Title level="h2">{titleDesc}</Title>
                <p className={styles.text}>{desc}</p>
                <ul>
                    <li className={styles.text}>{descList}</li>
                    <li className={styles.text}>{descList}</li>
                    <li className={styles.text}>{descList}</li>
                </ul>

            </div>
            <div className={styles.characteristics}>
                <Title level="h2">{titleChar}</Title>
                <ul className={styles.listChar}>
                    <span className={styles.text}><input className={styles.checkbox} type="checkbox" />{char}</span>
                    <span className={styles.text}><input className={styles.checkbox} type="checkbox" />{char}</span>
                    <span className={styles.text}><input className={styles.checkbox} type="checkbox" />{char}</span>
                </ul>
            </div>
        </div>
    )
}