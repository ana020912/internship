import Image from 'next/image'
import styles from './AddBtn.module.css'

export default function AddBtn({imgsrc, bgColor}) {
    return (
        <button className={`btnRemoveBorder ${styles.addBtn} ${bgColor}`}>
            <Image 
                src={imgsrc}
                // className={className}
                width={16}
                height={16}
            />    
        </button>
    )
}