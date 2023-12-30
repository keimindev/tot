import Image from 'next/image'
import styles from './page.module.css'
import Timer from '@/components/timer/timer'
import TimeRecord from '@/components/record/time-record'

export default function Home() {
  return (
    <main className={styles.container}>
      <Timer />
      <TimeRecord />
    </main>
  )
}
