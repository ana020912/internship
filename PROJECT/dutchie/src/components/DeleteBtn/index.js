import Image from "next/image";
import BtnStyle from "../BtnStyle";
import styles from './'
import React from 'react'

export default function DeleteBtn({className}) {
    return (
        <div className={styles.deleteBtn}>
            <BtnStyle className={className}>
                <Image
                    src='/delete-icon-dark.svg'
                    width={7}
                    height={7}
                />
            </BtnStyle>
        </div>

    )
}
