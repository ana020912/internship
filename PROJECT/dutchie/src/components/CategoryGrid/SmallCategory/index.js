import Button from '@/components/Button'
import styles from './SmallCategory.module.css'

export default function SmallCategory({ info, btnStyle }) {
    return (
        <div className={styles.smallCard}>
            <div className={styles.content}>
                <p>{info}</p>
                {
                    btnStyle === 'dark' ? (
                        <Button
                            imgsrc='/arrow-right.svg'
                            imgposition='right'
                            className= {`btnRegular btnDark btnRemoveBorder textWhite ${styles.btnBorder}`}
                            text="Check it out"
                        />
                    ) : (
                        <Button
                            imgsrc='/arrow-right-dark.svg'
                            imgposition='right'
                            className='btnRegular btnTransparent btnRemoveBorder textBlack'
                            text="from 8.90€"
                        />
                    )
                }
            </div>

        </div>
    )
}