import styles from './FilterOption.module.css'
import Button from '@/components/Button'
export default function FilterOption({name, imgposition, imgsrc}) {
    return (
        <div className={styles.filterOption}>
             <Button
                imgposition={imgposition}
                imgsrc={imgsrc}
                className={`option btnDark`}
                text={name}
            />
        </div>
       
    )
}