import Profile from "@/components/profile/profile";
import styles from "./page.module.css";
import { handleGithubLogOut } from "@/lib/data";
import Link from "next/link";
import { getTotalTime, getSectionRecordByMonth } from "@/lib/data";
import { getLastMonth } from "@/utils/formatDay";
import { formatTimeClock } from '@/utils/formatTime';

async function Mypage () {

  // 년도 달 구하기 
  const today = new Date();
  const currentYear = today.getFullYear();
  const prevMonth = today.getMonth()

  const totalRecordTime = await getTotalTime(currentYear, prevMonth);
  const totalSectionTimeByMonth = await getSectionRecordByMonth(currentYear, prevMonth);

  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
      <Link href="/">
      <div>←</div>
      </Link>
       <div className={styles.logoutBox}>
          <form action = {handleGithubLogOut}>
            <button className={styles.logoutBtn}>Logout</button>
          </form>
        </div>
        </div>
        <Profile />
        <div className={styles.lastMonthBox}>지난 달 기록</div>
        <div className={styles.sessionbox}>
         <h3>{prevMonth != '' ? getLastMonth(prevMonth) : isToday(new Date())}</h3>
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
        <div className={styles.footer}>
         Copyrightⓒ2024 MIN All rights reserved.
        </div>
    </div>
  )
}

export default Mypage
