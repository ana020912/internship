import Image from 'next/image'
import styles from './Basket.module.css'
import AddBtn from '@/components/AddBtn'

export default function Basket({basketInfo, price, imgsrc, btnImg, bgColor }) {
    return (
        <div>
            <div className={`btnDark ${styles.products} ${bgColor}`}>
                <Image 
                    src={imgsrc}
                    width={230}
                    height={132}
                />
                <AddBtn
                    imgsrc='/plus-icon-dark.svg'
                />
            </div>
            <p className={styles.productsInfo}>{basketInfo} | <span className={styles.price}>{price}</span> </p>
        </div>
    )
}