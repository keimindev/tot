import styles from "./time-record.module.css";
import { formatTimeClock } from "@/utils/formatTime";
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

  const isToday = new Date().toString().slice(4, 16)

  return(
        <div className={styles.container}>
          <div className={styles.totalCount}>Total {formatTimeClock(totalRecordTime)}</div>
          {record?.map((content) => {
           return(
             <div className={styles.recordLine} key={content._id}>
                <div className={`${styles.recordDay} ${isToday === content.createdAt?.toString().slice(4, 16) && styles.today}`}>{content.createdAt?.toString().slice(4, 16)}</div>
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