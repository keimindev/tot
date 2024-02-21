import styles from "./time-record.module.css";
import { formatTimeClock } from "@/utils/formatTime";
import { isToday } from "@/utils/formatDay";
import { getTotalTime, getRecordsByToday, getTodayTotalTime,getSectionRecordByMonth } from "@/lib/data";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic'; 
const TimeRecord = async () => {
  // 년도 달 구하기 
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1
  const currentDay = today.getDate()
   
  const record = await getRecordsByToday(currentYear, currentMonth, currentDay);
  const totalRecordTime = await getTotalTime(currentYear, currentMonth);
  const totalTodayTime = await getTodayTotalTime(currentYear, currentMonth, currentDay);
  const totalSectionTimeByMonth = await getSectionRecordByMonth(currentYear, currentMonth);

  return(
        <div className={styles.container}>
          <h3>Today&apos;s session</h3>
          <div className={styles.totalCount}>Total {formatTimeClock(totalTodayTime)}</div>
          <div className={styles.innerBox}>
            {record.length === 0 ?  <div className={styles.nothingBox}>오늘 기록된 시간이 없습니다.</div>  :
             record[0].dayRecord.sort((a,b) => b.time - a.time).map((item) => {
                return (
                   <>
                   <div className={styles.recordBox}>
                    <div className={styles.section}>{item.section}</div>
                    <div>{formatTimeClock(item.time)}</div>
                  </div>
                   </>
                )})}
          </div>
         <div className={styles.sessionbox}>
         <h3>{isToday(new Date())}</h3>
         <div className={styles.totalCount}>Total {formatTimeClock(totalRecordTime)}</div>
         <div className={styles.sessionInnerbox}>
          {totalSectionTimeByMonth.map((item) => {
            return (
              <>
              <div className={styles.seesion}><p>{item.section}</p><p>{formatTimeClock(item.totalTime)}</p></div>
              </>
            )
          })}
         </div>
      </div>
        </div>
    )
}

export default TimeRecord;