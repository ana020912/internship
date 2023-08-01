import React from 'react'
import Input from '@/components/Contact/Formular/Input'
import Image from 'next/image'
import styles from './SignInForm.module.css'
import Link from 'next/link'
export default function SignInForm() {
  return (
    <div className={styles.signIn}>
      <div className={styles.logoAndTitle}>
        <Image
          src='/logo.svg'
          width={144}
          height={28}
        /> | <i>members</i>
      </div>

      <p className={styles.signUp}>Not a member? Don't hesitate to
        <span className={styles.signUp_highlight}> sign up</span>
      </p>

      <div className={styles.signInFields}>
        <Input placeholder='E-mail' inputType='text' className={styles.inputField} />
        <Input placeholder='Password' inputType='password' className={styles.inputField} />
        <div className={styles.rememberMe}>
          <Input inputType='checkbox' className={styles.checkboxStyle} />
          Remember me for next session
        </div>
        <Input inputType='submit' value='Sign in' className={`${styles.inputField} btnDark textWhite`} />
      </div>
      <div className={styles.separator}></div>
      <Link href='#'><Input className={`${styles.inputField } ${styles.fbSignIn} textBlack textCenter`} value='Sign in with Facebook' /></Link>
      <Link href='#'><Input className={`${styles.inputField} ${styles.googleSignIn} textBlack textCenter`} value='Sign in with Google' /></Link>
     
    </div>
  )
}
