// import GridLayout from '@/components/layout/layout-grid';
import styles from './product-component.module.css';
import ProductInfo from '../product-info';
import PurchaseInfo from '../purchase-info';
import Suggestions from '../suggestions';
import GridHalf from '@/components/GridHalf';
import Breadcrumbs from '@/components/ProductListingComp/Breadcrumbs';
// import Swiper from '../Swipper';
import SwiperComp from '../Swipper';

export default function ProductComponent() {
    return (
        <div className={styles.wrapper_details}>
            <Breadcrumbs />
            <div className='container'>

                <GridHalf>
                    <div className={styles.leftSide}>
                        <SwiperComp />
                        <ProductInfo
                            titleDesc="Description"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium lectus dignissim id nulla nisl at pellentesque:"
                            descList="•   Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            titleChar="Characteristics"
                            char="Lorem ipsum dolor sit amet." />
                    </div>
                    <div className={styles.rightSide}>
                        <PurchaseInfo title="Product Title" description="250 g  •  Regular price per kilogram $39.90" price="$18.90" />
                        <Suggestions />

                    </div>
                </GridHalf>
            </div>

        </div>
    )
}