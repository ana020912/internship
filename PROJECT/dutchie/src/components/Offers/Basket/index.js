import Image from 'next/image'
import styles from './Basket.module.css'
import AddBtn from '@/components/BtnStyle'
import BtnStyle from '@/components/BtnStyle'

export default function Basket({basketInfo, price, imgsrc, btnImg, bgColor }) {
    return (
        <div>
            <div className={`btnDark ${styles.products} ${bgColor}`}>
                <Image 
                    src={imgsrc}
                    width={230}
                    height={132}
                />
                <BtnStyle className='btnRemoveBorder' bgColor='btnWhite'>
                    <Image
                        src='/plus-icon-dark.svg'
                        width={16}
                        height={16}
                    />
                </BtnStyle>
            </div>
            <p className={styles.productsInfo}>{basketInfo} | <span className={styles.price}>{price}</span> </p>
        </div>
    )
}