import styles from './page.module.css'
import Timer from '@/components/timer/timer'
import TimeRecord from '@/components/record/time-record'
import { auth } from '@/lib/auth'
import LoginPage from './auth/login/page';
import { handleGithubLogOut } from "@/lib/data";


export default async function Home() {

  const session = await auth();

  return (
    <main className={styles.container}>
      <div className={styles.title}>T.O.T v.1.0.0</div>
      {session?.user ? (
        <div>
      <div className={styles.logoutBox}>
      <form action = {handleGithubLogOut}>
                <button className={styles.logoutBtn}>Logout</button>
      </form>
      </div>
      <h2 className={styles.username}>Hello {session.user.name} 👋🏻</h2>
      <div className={styles.innerbox}>
        <Timer />
        <TimeRecord/>
      </div>
    </div>
      ) : ( <LoginPage/>)}
      <div className={styles.footer}>Copyrightⓒ2024 MIN All rights reserved.</div>
    </main>
  )
}
