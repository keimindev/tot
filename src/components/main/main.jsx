import Image from 'next/image';
import styles from './main.module.css'

const Main = ({user}) => {

   return (
    <div className={styles.container}>
    <div className={styles.userinfo}>
      <div className={styles.userWelcom}>
         <p>Welcome to</p>
         <p>Your time is 1,000 hr</p>
      </div>
      <div className={styles.userinfobox}>
         <p>{user.name}</p>
         <p className={styles.userImg}><img src={user.image} alt="profile img" /></p>
      </div>
      </div>
      <div className={styles.timerbox}>
      <div>⏰ Tracking Time</div>
      <div className={styles.timerbtn}>Start timer</div>
      </div>
    </div>
   )
}


export default Main;