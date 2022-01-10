import styles from './clock.module.scss'
import { useState, useEffect } from "react"; 
import NumberClockCard from "../numberClockCard"

const initialState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}

export default function Clock({deadline}) {
    const [date, setDate] = useState(initialState) 

    useEffect(() => {
      setInterval(() => getTimeUntil(deadline), 1000); 

      return () => getTimeUntil(deadline);
    }, [deadline])

    const leading = (num) => {
      return num < 10 ? "0" + num : num;
    };
  
    const getTimeUntil = (deadline) => {
      const time = Date.parse(deadline) - Date.parse(new Date()); 
 
      if (time < 0) {
        this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24)); 
        
        setDate({days, hours, minutes, seconds})
      }
    }
 
    return (
      <div className={styles.container}>
        <NumberClockCard number={date.days} label={`Dias`} /> 
        <NumberClockCard number={leading(date.hours)} label={`Horas`} /> 
        <NumberClockCard number={leading(date.minutes)} label={`Minutos`} /> 
        <NumberClockCard number={leading(date.seconds)} label={`Segundos`} /> 
      </div>
    );
} 
