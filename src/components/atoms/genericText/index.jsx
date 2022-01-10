
import styles from './text.module.scss'

export default function GenericText({children}) {
  return (
    <p className={styles.genericText}> 
        {children}
    </p>
  )
}
