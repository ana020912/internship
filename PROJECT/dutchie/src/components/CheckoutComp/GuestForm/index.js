import Input from '@/components/Contact/Formular/Input'
import styles from './GuestForm.module.css'

export default function GuestForm() {
  return (
    <div className={styles.guestForm}>
        <p className={styles.detailsTitle}>Personal details</p>

        <Input placeholder='E-mail' inputType='email' className={styles.inputField} />
        <div className={styles.separator}></div>
        <Input placeholder='First name' inputType='text' className={styles.inputField} />
        <Input placeholder='Last name' inputType='text' className={styles.inputField} />
        <Input placeholder='Phone(optional)' inputType='phone' className={styles.inputField} />
        <div className={styles.separator}></div>
        <Input placeholder='Enter the first line of your address' inputType='text' className={styles.inputField} />
        <div className={styles.countrySection}>
          <div className={styles.countryOptions}>
              <p>Country</p>
              <p className={styles.countryName}> 🇳🇱 Netherlands</p>
          </div>

          <p>Change country</p>
      </div>
    </div>
  )
}
