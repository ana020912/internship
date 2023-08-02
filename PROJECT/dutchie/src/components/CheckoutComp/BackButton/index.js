import Link from 'next/link'
import styles from './BackButton.module.css'

import React from 'react'

export default function BackButton({ text }) {
  return (
    <Link href='#' className={styles.backButton}>
      {text}
    </Link>
  )
}
