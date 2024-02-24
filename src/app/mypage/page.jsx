import Profile from "@/components/profile/profile";
import styles from "./mypage.module.css";
import { handleGithubLogOut } from "@/lib/data";
import Link from "next/link";


async function Mypage () {

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
        {/* <div className={styles.yearBox}>이번년도 진행상황</div> */}
        <div className={styles.lastMonthBox}>지난 달 기록</div>
        <div>캘린더</div>
         {/* <div className={styles.title}>T.O.T v.1.0.0</div> */}
        <div className={styles.footer}>
         Copyrightⓒ2024 MIN All rights reserved.
        </div>
    </div>
  )
}

export default Mypage
