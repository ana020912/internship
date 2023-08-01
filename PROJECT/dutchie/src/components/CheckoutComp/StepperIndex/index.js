import BtnStyle from '@/components/BtnStyle'
import React from 'react'
import styles from './StepperIndex.module.css'
export default function StepperIndex({index, bgColor}) {
  return (
    <BtnStyle className={`btnTransparent ${styles.stepperIndex}`} bgColor={bgColor}>
        {index}
    </BtnStyle>
  )
}
