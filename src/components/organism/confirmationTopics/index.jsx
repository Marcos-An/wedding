import styles from './confirmationTopics.module.scss' 
import ItemNumber from '../../atoms/itemNumber'
import GenericText from '../../atoms/genericText'

export default function ConfirmationTopics() {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>  
        <ItemNumber>1</ItemNumber>
        <GenericText>Informe seu nome completo </GenericText>
      </div>
      <div className={styles.secondSection}>  
        <ItemNumber>2</ItemNumber>
        <GenericText>Informe a quantidade de adultos e crinças incluindo você</GenericText>
      </div>
      <div className={styles.thirdSection}>  
        <ItemNumber>3</ItemNumber>
        <GenericText>Aguarda ansiosamente o grande dia</GenericText>
      </div>
    </div>
  )
}
