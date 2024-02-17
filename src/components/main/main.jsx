'use client';
import Image from 'next/image';
import styles from './main.module.css'
import Link from 'next/link';

const Main = ({user}) => {


   return (
    <div className={styles.container}>
    <div className={styles.userinfo}>
      <div className={styles.userWelcom}>
         <p>Welcome to</p>
         {/* <p>Your time is 00000 hr</p> */}
      </div>
      <div className={styles.userinfobox}>
         <p>{user.name} </p>
         <p className={styles.userImg}><Image src={user.image} alt="profile img" width={30} height={30}/></p>
      </div>
      </div>
      <div className={styles.timerbox}>
      <div>⏰ Tracking Time</div>
      <Link href="/category">
      <div className={styles.timerbtn}>Start timer</div></Link>
      </div>
    </div>
   )
}


export default Main;