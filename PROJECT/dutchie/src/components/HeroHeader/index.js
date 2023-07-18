import Image from 'next/image'
import Button from '../Button'
import Title from '../Title'
import styles from './HeroHeader.module.css'
import GridHalf from '../GridHalf'

export default function HeroHeader() {
    return (
        <section className={styles.heroHeaderBg}>
            <div className='container'>
                <GridHalf>
                    <div className={styles.leftSide}>
                        <Title level='h1' className={styles.title}>
                            Your <span className={styles.strong}>dutch store,</span><br/>
                            always close.
                        </Title>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <Button
                            imgposition='left'
                            text='Check out the deals'
                            imgsrc='/percent.svg'
                            className='btnLarge btnDark btnRadius textWhite'
                        />
                    </div>

                    <div className={styles.rightSide}>
                        <Image
                            src='/products.png'
                            width={532}
                            height={285}
                        />
                    </div>
                </GridHalf>
            </div>

        </section>
    )
}