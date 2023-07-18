import Button from '@/components/Button'
import styles from './LargeCategory.module.css'

export default function LargeCategory({ info }) {
    return (
        <div className={styles.largeCategory}>
            <div className={styles.content}>
                <p className={styles.info}>{info}</p>
                <Button
                    className='btnLink btnTransparent btnRemoveBorder textWhite'
                    imgposition='right'
                    imgsrc='/arrow-right.svg'
                    text='from 8.90€'
                />
            </div>

        </div>
    )
}