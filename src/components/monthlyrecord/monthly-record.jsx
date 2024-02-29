import styles from './monthly-record.module.css';
import { isToday, getLastMonth } from '@/utils/formatDay';
import { formatTimeClock } from '@/utils/formatTime';

function MonthlyRecord({totalTime, data, month}) {
  return (
    <div className={styles.sessionbox}>
         <h3>{month != '' ? getLastMonth(month) : isToday(new Date())}</h3>
         <div className={styles.totalCount}>Total {formatTimeClock(totalTime)}</div>
         <div className={styles.sessionInnerbox}>
          {data.map((item) => {
            return (
              <>
              <div className={styles.seesion}><p>{item.section}</p><p>{formatTimeClock(item.totalTime)}</p></div>
              </>
            )
          })}
         </div>
    </div>
  )
}


export default MonthlyRecord
