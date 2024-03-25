import styles from "./time-record.module.css";
import { formatTimeClock } from "@/utils/formatTime";
import { getTotalTime, getRecordsByToday, getTodayTotalTime,getSectionRecordByMonth } from "@/lib/data";
import MonthlyRecord from "../monthlyrecord/monthly-record";
import { handleGithubLogOut } from "@/lib/data";

export const dynamic = 'force-dynamic'; 
const TimeRecord = async ({user}) => {

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
            {record.length === 0 ?  <div className={styles.nothingBox}>There are no recorded times for today.</div>  :
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
         <MonthlyRecord totalTime={totalRecordTime} data={totalSectionTimeByMonth} />

{/* blur */}
         { user.email === 'guest' && 
         <div className={styles.blurbox}>
          <div className={styles.blurboxtext}>Do you want to record your day?</div>
          <form action = {handleGithubLogOut}>
          <button className={styles.blurboxbtn}>Login</button>
          </form>
         </div> }
        </div>
    )
}

export default TimeRecord;