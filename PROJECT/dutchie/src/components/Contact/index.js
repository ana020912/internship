import GridHalf from '../GridHalf'
import Title from '../Title'
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <section>
            <div className='container'>
                <Title level="h2">Any questions? Just ask.</Title>
                <Title level="h5" className='textGrey'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Title>

                <GridHalf>
                    <div className={styles.leftSide}>
                        
                    </div>

                    <div className={styles.rightSide}>

                    </div>
                </GridHalf>
            </div>
        </section>
    )
}