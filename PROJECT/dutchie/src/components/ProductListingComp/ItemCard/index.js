import Image from 'next/image'
import styles from './ItemCard.module.css'
import Title from '@/components/Title'
import OldPrice from '../OldPrice'
import NewPrice from '../NewPrice'
import AddBtn from '@/components/AddBtn'
import DiscountPrice from '../DiscountPrice'

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
                <DiscountPrice className={styles.discountPrice} price='30'/>
            </div>
            <div className={styles.itemDetails}>
                <Title className={`textGrey ${styles.title}`} level='h6'>{itemName}</Title>
                <div className={styles.btnPriceLayout}>
                    <div className={styles.price}>
                       <OldPrice price='12.90'/>
                       <NewPrice moneySymbol='$' price='8.90' />
                    </div>

                    <AddBtn
                        imgsrc='/plus-icon-light.svg'
                        bgColor='btnDark'
                    />
                </div>
            </div>
        </div>
    )
}