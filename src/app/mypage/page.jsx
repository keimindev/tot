import styles from "./mypage.module.css";
import { handleGithubLogOut } from "@/lib/data";
import { getUserInfo } from "@/lib/data";
import Link from "next/link";
import Image from 'next/image';


async function Mypage () {
  const user = await getUserInfo('keimindev@gmail.com')
  console.log(user,'user')

  return (
    <div className={styles.container}>
      <Link href="/">
      <div>back</div>
      </Link>
      <div className={styles.profileBox}>
        <div><Image src={user.image} alt="profileImg" width={40} height={40}/></div>
        <div>{user.username}</div>
      </div>
       <div className={styles.logoutBox}>
          <form action = {handleGithubLogOut}>
            <button className={styles.logoutBtn}>Logout</button>
          </form>
        </div>
        {/* <div className={styles.yearBox}>이번년도 진행상황</div> */}
        <div className={styles.lastMonthBox}>지난 달 기록</div>
        <div className={styles.footer}>
         Copyrightⓒ2024 MIN All rights reserved.
        </div>
    </div>
  )
}

export default Mypage
