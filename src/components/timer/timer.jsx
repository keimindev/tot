"use client";

import { useState, useRef} from 'react';
import styles from './timer.module.css';
import { formatTimeClock } from "@/utils/formatTime";
import SavePopup from '../savepopup/save-popup';
import { Stopwatch } from '@/utils/stopwatch';


const Timer = () => {

    const [startClicked, setStartClicked] = useState(false);
    const [stopwatch, setStopwatch] = useState(new Stopwatch());
    const [time, setTime] = useState(0);
    const [open, setOpen] = useState(false);

    let intervalTimeRef = useRef(undefined);


    // timer start & stop
    const timerRun = () => {
        if(!startClicked){
          stopwatch.start();
          intervalTimeRef.current =  setInterval(() =>{
                setTime(stopwatch.getTime());
            }, 1000);
            setStartClicked(true)
        }else{
          clearInterval(intervalTimeRef.current);
          stopwatch.stop();
          setStartClicked(false);
          setOpen(true)
        }
    }


    const resetTimer = () => {
      setTime(0);
      clearInterval(intervalTimeRef.current);
      setStartClicked(false);
      setStopwatch(new Stopwatch())
    }

    return(
        <div>
        <div className={styles.container}>
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
            {open === true && <SavePopup setOpen={setOpen} time={time} setTime={setTime}/>}
        </div>
      
    )
}


export default Timer;