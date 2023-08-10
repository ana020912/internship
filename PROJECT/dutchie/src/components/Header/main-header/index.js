import Image from "next/image";
import styles from "./MainHeader.module.css"
import InputBar from "../../InputBar";
import ProfilePic from "@/components/ProfilePic";
import Balance from "@/components/Header/balance";
import Logo from "../../logo";
import NavLinks from "@/components/nav-links";
export default function MainHeader() {
    return (
        <section className={styles.mainheader}>
            <div className='container'>
                <div className={styles.mainheader__container}>
                    <Logo source='/logo.svg'/>
                    <NavLinks />
                    <InputBar inputBar='searchbar' inputType='text' inputHolder='Search for foods, products or other' />
                    <div className={styles.profileoption}>
                        <ProfilePic image='/user.svg' />
                        <Balance currentSold='$26.70' />
                    </div>
                </div>
               
            </div>
        </section>
    )
}