import styles from '../styles/home.module.scss'
import Menu from '../components/molecules/menu'
import Clock from '../components/molecules/clock'
import GenericTittle from '../components/atoms/genericTittle' 
import GenericText from '../components/atoms/genericText' 
import StoreButton from '../components/molecules/storeButton'
import ConfirmationTopics from '../components/organism/confirmationTopics'
import WhatsappButton from '../components/molecules/whatsappButton'

export default function Home() {
  return (
    <div>
      <div className={styles.headerContainer}>   
        <Menu/>
      </div>
      <div className={styles.banner}/>
      <div className={styles.countDownContainer}>
        <GenericTittle>12 de Março está  chegando</GenericTittle> 
        <Clock deadline={`March, 12, 2022`}/>
      </div> 
      <a name="lista-de-presentes" id="lista-de-presentes"/>
      <div className={styles.giftListContainer}>
        <GenericTittle>Fique à vontade para nos presentear</GenericTittle> 
        <GenericText>Fizemos duas listas com muito carinho, fique à vontade para escolher um item</GenericText>
        <div className={styles.storeButtonsContainer}>
          <StoreButton text={`Veja a lista na Havan`} store={`havan`}/>
          <StoreButton text={`Veja a lista na Magalu`} store={`magalu`}/>
        </div>
      </div>
      <a name="confirme-presenca" id="confirme-presenca"/>
      <div className={styles.confirmPresence}>
        <GenericTittle>Confirme sua presença</GenericTittle> 
        <GenericText>Confirme sua presença com o Bruno da Fábrica de eventos!</GenericText>
        <ConfirmationTopics/>
        <WhatsappButton/>
      </div>
    </div>
  )
}
