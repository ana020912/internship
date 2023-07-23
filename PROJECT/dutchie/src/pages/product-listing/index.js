import Layout from "@/components/Layout";
import AppliedFilters from "@/components/ProductListingComp/AppliedFilters";
import Breadcrumbs from "@/components/ProductListingComp/Breadcrumbs";
import CategoryHero from "@/components/ProductListingComp/CategoryHero";
import FiltersList from "@/components/ProductListingComp/FiltersList";
import ItemCard from "@/components/ProductListingComp/ItemCard";
import Products from "@/components/ProductListingComp/Products";

export default function Checkout() {
    return (
        <Layout>
            <CategoryHero />
            <Breadcrumbs />
            <Products />
        </Layout>
          
    )
}