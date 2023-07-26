import Image from 'next/image'
import styles from './CartProduct.module.css'
import AddBtn from '@/components/AddBtn'
import NewPrice from '@/components/ProductListingComp/NewPrice'
import { useState } from 'react'

export default function CartProduct({ imgsrc, background, name }) {

    const [counter, setCounter] = useState(1);

    function addProduct() {
            
    }

    function substractProduct() {

    }

    return (
        <div className={`background ${styles.cartProduct} `}>
            <div className={styles.leftSide}>
                <Image
                    src={imgsrc}
                    width={88}
                    height={88}
                />
                <div className={styles.productDetails}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.counter}>
                        <AddBtn
                            imgsrc='/plus-icon-light.svg'
                            bgColor='btnDark'
                        />
                        <span>1</span>x
                        <AddBtn
                            imgsrc='/minus-icon-light.svg'
                            bgColor='btnDark'
                        />
                    </div>
                </div>
            </div>

            <div className={styles.rightSide}>
                <div>
                    <AddBtn
                        imgsrc={'/delete-icon-dark.svg'}

                    />
                </div>

                <NewPrice
                    moneySymbol='$'
                    price='18.90'
                />
            </div>
        </div>
    )
}