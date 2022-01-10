import styles from './menu.module.scss'
import Image from 'next/image'
import GenericText from '../../atoms/genericText'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className={styles.menuContainer}>   
    <Link href="#confirme-presenca">
      <a>
        <GenericText>
          Confirmar presença
        </GenericText> 
      </a>
    </Link>
    <div  className={styles.logo}>
      <Image 
        src="/tag.svg"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <Link href="#lista-de-presentes">
      <a>
        <GenericText>
          Lista de presentes
        </GenericText>
      </a>
    </Link>
    </div>
  )
}
