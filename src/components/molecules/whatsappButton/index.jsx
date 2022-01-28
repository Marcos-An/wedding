import styles from './whatsappButton.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default function WhatsappButton() {

  const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=556792040761&text='

  return (
    <Link href={WHATSAPP_URL} passHref >
      <a target="_blank" className={styles.whatsappButton}>
        <div className={styles.logo}>
          <Image
            src={'/whatsapp-logo.svg'}
            layout='fill'
            objectFit='contain'
          />
        </div>
        Confirme sua preseça
      </a>
    </Link>
  )
}
