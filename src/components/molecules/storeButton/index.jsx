import styles from './storeButton.module.scss'
import Image from 'next/image'
import Link  from 'next/link'

const MAGALU = `magalu`
const MAGALU_LOGO = `/magalu-logo.svg`
const HAVAN_LOGO = `/havan-logo.svg`


const MAGALU_URL = `https://lista.havan.com.br/Convidado/ItensListaPresente/592454`
const HAVAN_URL = `https://lista.havan.com.br/Convidado/ItensListaPresente/592454`

export default function StoreButton({text, store}) {

  const redirectURL = () => {
    return store === MAGALU ? MAGALU_URL : HAVAN_URL
  }
  
  return (
    <Link href={redirectURL()} passHref > 
     <a target="_blank" className={styles.storeButton}>
      <div  className={styles.logo}>
        <Image 
          src={store === MAGALU ? MAGALU_LOGO : HAVAN_LOGO}
          layout='fill'
          objectFit='contain'
        />
      </div>
        {text}
        
     </a>
    </Link>
  )
}
