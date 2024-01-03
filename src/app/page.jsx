import styles from './page.module.css'
import Timer from '@/components/timer/timer'
import TimeRecord from '@/components/record/time-record'

export default async function Home() {

  return (
    <main className={styles.container}>
      <div className={styles.title}>T.O.T v.1.0.0</div>
      <Timer />
      <TimeRecord/>
      <div className={styles.footer}>Copyrightⓒ2024 MIN All rights reserved.</div>
    </main>
  )
}
