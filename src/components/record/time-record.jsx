import styles from "./time-record.module.css";
import { formatTimeClock } from "@/utils/formatTime";
import { isToday } from "@/utils/formatDay";
import { getRecords , getTotalTime, getRecordsByMonth } from "@/lib/data";

export const dynamic = 'force-dynamic'; 
const TimeRecord = async () => {
  // 년도 달 구하기 
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1
   
  // const record = await getRecords();
  const record = await getRecordsByMonth(currentYear, currentMonth);
  const totalRecordTime = await getTotalTime(currentYear, currentMonth);

  return(
        <div className={styles.container}>
          <h2>Todays session</h2>
          <div className={styles.totalCount}>Total {formatTimeClock(totalRecordTime)}</div>
          <div className={styles.innerBox}>
          {record?.map((content) => {
             return(
              <>     
            {isToday(new Date()) === `${content.month} ${content.day} ${content.year}` ? (
            <div className={styles.recordTimeBox}>
                {content.dayRecord.map((item) => {
                  return (
                   <>
                   <div className={styles.recordBox}>
                    <div className={styles.section}>{item.section}</div>
                    <div>{formatTimeClock(item.time)}</div>
                    </div>
                   </>
                  )})}</div>)
                  : ( <div className={styles.recordBox}>오늘 기록된 시간이 없습니다.</div>)
                }
               </>
    );
  })}</div>

             <div className={styles.sessionbox}>
         <h2>Feburary 2024</h2>
         <div className={styles.totalCount}>Total {formatTimeClock(totalRecordTime)}</div>
         <div className={styles.sessionInnerbox}>
         <div className={styles.seesion}><p>Reading</p><p>00:30:00</p></div>
         <div className={styles.seesion}><p>Reading</p><p>00:30:00</p></div>
         <div className={styles.seesion}><p>Reading</p><p>00:30:00</p></div>
         <div className={styles.seesion}><p>Reading</p><p>00:30:00</p></div>
         </div>
      </div>
        </div>
    )
}

export default TimeRecord;