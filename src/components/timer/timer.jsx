"use client";

import { useState, useRef } from 'react';
import styles from './timer.module.css';
import { formatTimeClock } from "@/utils/formatTime";


const Timer = () => {

    const [startClicked, setStartClicked] = useState(false);
    const [time, setTime] = useState(0);

    let intervalTimeRef = useRef(undefined);


    // timer start & stop
    const timerRun = () => {
        if(!startClicked){
          intervalTimeRef.current =  setInterval(() =>{
                setTime((prev) => prev + 1000);
            }, 1000);
            setStartClicked(true)
        }else{
          clearInterval(intervalTimeRef.current);
          setStartClicked(false);
        }
       
    }


    const resetTimer = () => {
      setTime(0);
      clearInterval(intervalTimeRef.current);
      setStartClicked(false);
    }

    return(
        <div>
        <div className={styles.container}>
            {/* timer clock */}
             {/* 00:00:00 */}
             {formatTimeClock(time)}
        </div>
            {/* button container */}
            <div className={styles.buttonContainer}>
                <div 
                onClick={resetTimer}
                className={styles.btn}>RESET</div>
                <div
                onClick={timerRun}
                className={`${styles.btn} ${startClicked === true && styles.active}`}>
                    {startClicked === false ? "START" : "STOP"}</div>
            </div>
        </div>
    )
}


export default Timer;