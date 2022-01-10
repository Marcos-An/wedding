import styles from './tittle.module.scss'

export default function GenericTittle({children}) {
  return (
    <h1 className={styles.genericTittle}> 
        {children}
    </h1>
  )
}
