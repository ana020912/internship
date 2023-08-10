import Newsletter from '@/components/Newsletter'
import styles from './TopFooter.module.css'
import SocialMediaList from '../SocialMediaList'
import InfoList from '@/components/InfoList'


export default function TopFooter() {
    const list = {
        title: 'Shop',
        elements: ['element1', 'element2', 'element3']
    }
    return (
        <section className={styles.topFooter}>
            <div className='container'>
                <div className={styles.lists__topFooter}>
                    <InfoList list={list} filter='By Category' titleClass='footerListTitle' elementsClass='footerListElements' />
                    <InfoList list={list} filter='' titleClass='footerListTitle' elementsClass='footerListElements' />
                    <InfoList list={list} filter='' titleClass='footerListTitle' elementsClass='footerListElements' />
                    <InfoList list={list} filter='' titleClass='footerListTitle' elementsClass='footerListElements' />
                    <InfoList list={list} filter='' titleClass='footerListTitle' elementsClass='footerListElements' />
                </div>

                <div className={styles.newsletter_social}>
                    <Newsletter />
                    <SocialMediaList />
                </div>
                
            </div>

        </section>
    )
}