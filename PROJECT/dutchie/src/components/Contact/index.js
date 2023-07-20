import GridHalf from '../GridHalf'
import Title from '../Title'
import styles from './Contact.module.css'
import FAQSearch from './FAQSearch'
import Formular from './Formular'

export default function Contact() {
    return (
        <section>
            <div className='container'>
                <Title level="h2">Any questions? Just ask.</Title>
                <Title level="h5" className='textGrey'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Title>

                <GridHalf>
                    <Formular message='We usually respond within 1 working day 😉'/>
                    <FAQSearch />
                </GridHalf>
            </div>
        </section>
    )
}