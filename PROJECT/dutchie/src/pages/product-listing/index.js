import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/ProductListingComp/Breadcrumbs";
import CategoryHero from "@/components/ProductListingComp/CategoryHero";
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