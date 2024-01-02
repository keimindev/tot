import Image from 'next/image'
import styles from './page.module.css'
import Timer from '@/components/timer/timer'
import TimeRecord from '@/components/record/time-record'
import { getRecords } from '@/lib/data'

export default async function Home() {
  
  const records = await getRecords();

  return (
    <main className={styles.container}>
      <div className={styles.title}>T.O.T v.1.0.0</div>
      <Timer />
      <TimeRecord records={records}/>
    </main>
  )
}
