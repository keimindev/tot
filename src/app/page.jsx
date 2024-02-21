import styles from "./page.module.css";
import Timer from "@/components/timer/timer";
import TimeRecord from "@/components/record/time-record";
import { auth } from "@/lib/auth";
import LoginPage from "./auth/login/page";
import Main from "@/components/main/main";


export default async function Home() {
  const session = await auth();

  return (
    <main className={styles.container}>
      {/* <div className={styles.title}>T.O.T v.1.0.0</div> */}
      {session?.user ? (
        <div>
          <Main user={session.user} />
          {/* <div className={styles.innerbox}> */}
          {/* <Timer user ={userInfo} /> */}
          <TimeRecord />
          {/* </div> */}
        </div>
      ) : (
        <LoginPage />
      )}

    </main>
  );
}
