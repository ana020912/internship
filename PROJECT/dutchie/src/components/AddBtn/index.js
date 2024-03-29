import Image from "next/image";
import BtnStyle from "../BtnStyle";

import React from 'react'

export default function AddBtn({width, height}) {
  return (
    <BtnStyle className='btnRemoveBorder' bgColor='btnDark'>
        <Image 
            src='/plus-icon-light.svg'
            width={width}
            height={height}
        />
    </BtnStyle>
  )
}
