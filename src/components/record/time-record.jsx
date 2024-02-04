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
          <div className={styles.totalCount}>Total {formatTimeClock(totalRecordTime)}</div>
          {record?.map((content) => {
           return(
             <div className={styles.recordLine} key={content._id}>
                <div className={`${styles.recordDay} ${isToday(new Date()) === `${content.month} ${content.day} ${content.year}` && styles.today}`}> 
                {content.year}-{content.month < 10 && '0'}{content.month}-{content.day < 10 && '0'}{content.day}</div>
                <div className={styles.recordTimeBox}>{content.dayRecord.map((item) => {
                 return (
                  <>
                  <div className={styles.recordBox}>
                   <div className={styles.section}>{item.section}</div>
                   <div>{formatTimeClock(item.time)}</div>
                   </div>
                  </>
                 )
                })}</div>
             </div>)
           })}
        </div>
    )
}

export default TimeRecord;