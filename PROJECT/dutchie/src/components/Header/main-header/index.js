import Image from "next/image";
import styles from "./MainHeader.module.css"
import NavbarOption from "@/components/Header/sec-navbar-option";
import InputBar from "../../InputBar";
import ProfilePic from "@/components/ProfilePic";
import Balance from "@/components/Header/balance";
import Logo from "../../logo";
import Navbar from "@/components/NavbarOptions";
import MegaMenu from "@/components/MegaMenu";
export default function MainHeader() {
    return (
        <section className={styles.mainheader}>
            <div className='container'>
                <div className={styles.mainheader__container}>
                    <Logo source='/logo.svg'/>
                    <Navbar />
                    <InputBar inputBar='searchbar' inputType='text' inputHolder='Search for foods, products or other' />
                    <div className={styles.profileoption}>
                        <ProfilePic image='/user.svg' />
                        <Balance currentSold='$26.70' />
                    </div>
                </div>
                {/* <MegaMenu /> */}
            </div>
        </section>
    )
}