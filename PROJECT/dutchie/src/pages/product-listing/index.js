import Layout from "@/components/Layout";
import AppliedFilters from "@/components/ProductListingComp/AppliedFilters";
import Breadcrumbs from "@/components/ProductListingComp/Breadcrumbs";
import CategoryHero from "@/components/ProductListingComp/CategoryHero";
import FiltersList from "@/components/ProductListingComp/Filters";
import ItemCard from "@/components/ProductListingComp/ItemCard";

export default function Checkout() {
    return (
        <Layout>
            <CategoryHero />
            {/* <ItemCard itemName='Berberana Red Dragon Tempranillo'/> */}
            {/* <Breadcrumbs /> */}
            <FiltersList />
            <AppliedFilters />
        </Layout>
          
    )
}