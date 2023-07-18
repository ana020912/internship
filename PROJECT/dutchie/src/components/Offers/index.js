import Button from '../Button'
import GridHalf from '../GridHalf'
import Title from '../Title'
import Basket from './Basket'
import styles from './Offers.module.css'

export default function Offers() {
    return (
        <section className={styles.offers}>
            <div className='container'>
                <GridHalf>
                    <div className={styles.leftSide}>
                        <Title level='h2'>YAAY! KING'S DAY!</Title>

                        <p className={styles.announcement}>⏰ This offer valid only until 1st of May </p>

                        <Title level='h5'>Grab a <span className={styles.emph}>treat basket</span> for a special occasion</Title>

                        <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, vitae ante risus quis 
                        cursus aliquam consectetur.</p>

                        <Button
                            className='btnLarge btnDark btnRemoveBorder btnRadius textWhite'
                            text='More for less - check it out'
                        />
                    </div>

                    <div className={styles.rightSide}>
                        <Basket 
                            basketInfo='Party Must-Haves'
                            price='$8.90'
                            imgsrc='/product-img-light.svg'
                            bgColor={styles.productsDark}
                        />
                        <Basket 
                            basketInfo='Party Must-Haves'
                            price='$8.90'
                            imgsrc='/product-img-dark.svg'
                            bgColor={styles.productsLight}
                        />
                        <Basket 
                            basketInfo='Party Must-Haves'
                            price='$8.90'
                            imgsrc='/product-img-light.svg'
                            bgColor={styles.productsDark}
                        />
                        <Basket 
                            basketInfo='Party Must-Haves'
                            price='$8.90'
                            imgsrc='/product-img-dark.svg'
                            bgColor={styles.productsLight}
                        />
                    </div>
                </GridHalf>
            </div>
        </section>
        
    )
}