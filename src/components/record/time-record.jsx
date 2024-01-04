import styles from "./time-record.module.css";
import { formatTimeClock } from "@/utils/formatTime";
import { getRecords , getTotalTime } from "@/lib/data";

export const dynamic = 'force-dynamic'; 
const TimeRecord = async () => {

    const record = await getRecords();
    const totalRecordTime = await getTotalTime();

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