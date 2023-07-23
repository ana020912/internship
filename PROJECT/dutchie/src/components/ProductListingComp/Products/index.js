import FiltersList from '../FiltersList'
import ItemCard from '../ItemCard';
import styles from './Products.module.css'
import data from './products.json'

export default function Products() {
    // console.log('data ', data.productTabs[1].items);
    const partyItems = data.productTabs[1].items;
    return (

        <section className={styles.products}>   

                <FiltersList />
            <div className={styles.itemCards}>
                {
                    partyItems.map(item => (
                        <ItemCard
                            discount={item.hasOwnProperty('discount') ? item.discount : ''}
                            itemName={item.name}
                            oldPrice={item.price}
                            newPrice={item.price}
                            moneySymbol='$'
                        />
                    ))
                }

            </div>
        </section>
    )
}