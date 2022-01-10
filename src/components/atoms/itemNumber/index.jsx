import styles from './itemNumber.module.scss'

export default function ItemNumber({children}) {
  return (
    <div className={styles.itemNumber}> 
      <h1>{children}</h1>
    </div>
  )
}
