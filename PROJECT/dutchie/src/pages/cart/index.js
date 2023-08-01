import HeroLayout from "@/components/HeroLayout";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Link from "next/link";
import CartItems from "@/components/CartComp/CartItems";
import CartSubtotal from "@/components/CartComp/CartSubtotal";

export default function Cart() {
    return (
        <Layout>
            <HeroLayout bgPoz='heroBgPoz'>
                <Link href='/product-details'><Title level='h6' className='goBack' >Continue shopping</Title></Link>
                <CartItems />
            </HeroLayout>
            <CartSubtotal />
        </Layout>
    )
}