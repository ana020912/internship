import AppliedFilters from '../AppliedFilters';
import FiltersList from '../FiltersList'
import ItemCard from '../ItemCard';
import SortBy from '../SortByComp';
import styles from './Products.module.css'
import data from './products.json'

export default function Products() {
    // console.log('data ', data.productTabs[1].items);
    const partyItems = data.productTabs[1].items;
    return (

        <section>
            <div className='container'>
                <div className={styles.products}>
                    <FiltersList />
                    <div className={styles.rightSide}>
                        <div className={styles.filtersLayout}>
                            <AppliedFilters />
                            <SortBy />
                        </div>

                        <div className={styles.itemCards}>
                            {
                                partyItems.map(item => (
                                    <ItemCard
                                        discount={item.hasOwnProperty('discount') ? item.discount : -1}
                                        itemName={item.name}
                                        oldPrice={item.price}
                                        newPrice={item.price}
                                        moneySymbol='$'
                                    />
                                ))
                            }

                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}