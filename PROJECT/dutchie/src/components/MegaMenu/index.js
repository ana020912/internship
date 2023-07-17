import InfoList from '../InfoList'
import styles from './MegaMenu.module.css'

export default function MegaMenu() {
    const list = {
        title: 'Food',
        elements: ['element1', 'element2', 'element3']
    }
    return (
        <section className={styles.megaMenu}>
            <div className='container'>
                <div className={styles.lists__megaMenu}>
                    <InfoList list={list} titleClass='megaMenuListTitle' elementsClass='megaMenulListElements' />
                    <InfoList list={list} titleClass='megaMenuListTitle' elementsClass='megaMenulListElements' />
                    <InfoList list={list} titleClass='megaMenuListTitle' elementsClass='megaMenulListElements' />
                    <InfoList list={list} titleClass='megaMenuListTitle' elementsClass='megaMenulListElements' />
                </div>

            </div>

        </section>
    )
}