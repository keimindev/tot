"use client";

import { useEffect, useState } from "react";
import styles from "./time-record.module.css";
import { formatTimeClock } from "@/utils/formatTime";

const TimeRecord = () => {
    const [totalTime, setTotalTime] = useState(0)
    
    const record = [
        {id: 3, section: "Reading", time: 1560000, date: '2023-12-28',},
        {id: 2, section: "Dev", time: 860000, date: '2023-12-27',},
        {id: 1, section: "Reading", time: 560000, date: '2023-12-26',},
    ]

    const totalLaps = () => {
        let temp = 0
        record.map((v) => {
           temp =+ v.time
        })
        setTotalTime(temp)
    }

    useEffect(() => {
        totalLaps();
    },[])

    return(
        <div className={styles.container}>
          <div className={styles.totalCount}>Total {formatTimeClock(totalTime)}</div>
          {record.map((content) => {
           return(
             <div className={styles.recordLine} key={content.id}>
                <div className={styles.recordDay}>{content.date}</div>
                <div className={styles.recordTimeBox}>
                <div className={styles.section}>{content.section}</div>
                <div>{formatTimeClock(content.time)}</div>
                </div>
             </div>)
           })}
        </div>
    )
}

export default TimeRecord;