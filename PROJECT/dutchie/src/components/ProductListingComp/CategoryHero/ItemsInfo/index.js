import Title from '@/components/Title'
import styles from './ItemsInfo.module.css'

export default function ItemsInfo({ title, info }) {
    return (
        <div className={styles.itemsInfo}>
            <div className={styles.content}>
                <Title className={styles.titleStyle} level='h6'>{title}</Title>
                <Title className='boldText textBlack' level='h5'>{info}</Title>
            </div>

        </div>
    )

}