"use client";

import { useState, useRef} from 'react';
import styles from './timer.module.css';
import { formatTimeClock } from "@/utils/formatTime";
import SavePopup from '../savepopup/save-popup';


const Timer = ({user}) => {

    const [startClicked, setStartClicked] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [time, setTime] = useState(null);
    const [open, setOpen] = useState(false);
    const intervalTimeRef = useRef();
  
    const timerRun = () => {
      if (!startClicked) {
        setStartTime(performance.now() - time);
        setTime(performance.now())
        setStartClicked(true);
        setOpen(false);
        intervalTimeRef.current = setInterval(() =>{
            setStartTime(performance.now())
        },10)
      } else {
        clearInterval(intervalTimeRef.current);
        setStartClicked(false);
        setOpen(true);
      }
    };
  
    const resetTimer = () => {
      clearInterval(intervalTimeRef.current);
        setStartTime(null);
        setTime(null);
        setStartClicked(false);
    };
  
    let timePassed = (startTime - time)

    return(
        <div>
        <div className={styles.container}>
             {formatTimeClock(timePassed)}
        </div>
            {/* button container */}
            <div className={styles.buttonContainer}>
                <div 
                onClick={resetTimer}
                className={styles.btn}>RESET</div>
                <div
                onClick={timerRun}
                className={`${styles.btn} ${startClicked=== true && styles.active}`}>
                    {startClicked === false ? "START" : "STOP"}</div>
            </div>
            {open === true && 
            <SavePopup 
            user={user}
            setOpen={setOpen} 
            time={timePassed} 
            setTime={setTime}
            setStartTime={setStartTime}/>}
        </div>
      
    )
}


export default Timer;