import Image from 'next/image'
import styles from './ItemCard.module.css'
import Title from '@/components/Title'
import OldPrice from '../OldPrice'
import NewPrice from '../NewPrice'
import DiscountPrice from '../DiscountPrice'
import AddBtn from '@/components/AddBtn'

export default function ItemCard({discount, itemName, oldPrice, newPrice, moneySymbol}) {
    return (
        <div className={styles.itemCard}>
            <div className={styles.itemImage}>
                <Image
                    className={styles.image}
                    src='/img-item-icon.svg'
                    width={56}
                    height={56}   
                />
                <DiscountPrice 
                className={`${styles.discountPrice} `} 
                price={discount}
                display={discount === -1? 'displayNone': 'displayBlock'}
                />
            </div>
            <div className={styles.itemDetails}>
                <Title className={`textGrey ${styles.title}`} level='h6'>{itemName}</Title>
                <div className={styles.btnPriceLayout}>
                    <div className={styles.price}>
                     <OldPrice display={discount === -1? 'displayNone': 'displayBlock'}
                         price={oldPrice} 
                     />
                       <NewPrice moneySymbol='$' price={newPrice} />
                    </div>

                    <AddBtn width='16' height='16'
                        imgsrc='/plus-icon-light.svg'
                        bgColor='btnDark'
                    />
                </div>
            </div>
        </div>
    )
}