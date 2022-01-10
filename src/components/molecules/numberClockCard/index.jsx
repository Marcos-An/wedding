import styles from './numberClockCard.module.scss';
import GenericText from '../../atoms/genericText'

export default function numberClockCard({number, label}) {  
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>{number}</h1>
        </div> 
         <GenericText>{label}</GenericText>
      </div>
    );
} 
