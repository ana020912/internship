import Image from 'next/image'
import styles from './CartProduct.module.css'
import AddBtn from '@/components/BtnStyle'
import NewPrice from '@/components/ProductListingComp/NewPrice'
import { useState } from 'react'
import DeleteBtn from '@/components/DeleteBtn'
import CounterBtn from '@/components/CounterBtn'

export default function CartProduct({ imgsrc, background, name }) {

    const [counter, setCounter] = useState(1);

    function addProduct() {
            
    }

    function substractProduct() {

    }

    return (
        <div className={`${background} ${styles.cartProduct} `}>
            <div className={styles.leftSide}>
                <Image
                    src={imgsrc}
                    width={88}
                    height={88}
                />
                <div className={styles.productDetails}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.counter}>
                        <CounterBtn
                            imgsrc='/plus-icon-light.svg'
                           
                        />
                        <span>1</span>x
                        <CounterBtn
                            imgsrc='/minus-icon-light.svg'
                            
                        />
                    </div>
                </div>
            </div>

            <div className={styles.rightSide}>
                <div>
                    <DeleteBtn
                        imgsrc='/delete-icon-dark.svg'

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