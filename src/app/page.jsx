import styles from "./page.module.css";
import TimeRecord from "@/components/record/time-record";
import { auth } from "@/lib/auth";
import LoginPage from "./auth/login/page";
import Main from "@/components/main/main";


export default async function Home() {
  const session = await auth();

  console.log(session, 'seeeeeee')

  return (
    <main className={styles.container}>
      {session?.user ? (
        <div>
          <Main user={session.user} />
          <TimeRecord user={session.user}/>
        </div>
      ) : (
        <LoginPage />
      )}

    </main>
  );
}
