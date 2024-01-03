import styles from "./time-record.module.css";
import { formatTimeClock } from "@/utils/formatTime";
import { getRecords } from "@/lib/data";


const TimeRecord = async () => {

    const record = await getRecords();

    const isToday = new Date().toString().slice(4, 16)

    return(
        <div className={styles.container}>
          <div className={styles.totalCount}>Total 0</div>
          {record?.map((content) => {
           return(
             <div className={styles.recordLine} key={content.time}>
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