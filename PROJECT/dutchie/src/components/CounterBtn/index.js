import Image from "next/image";
import BtnStyle from "../BtnStyle";

import React from 'react'

export default function CounterBtn({imgsrc}) {
  return (
    <BtnStyle className='btnRemoveBorder' bgColor='btnDark'>
        <Image
            src={imgsrc}
            width={10}
            height={10}
        />
    </BtnStyle>
  )
}
