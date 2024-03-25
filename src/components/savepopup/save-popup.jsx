'use client'

import { formatTimeClock } from "@/utils/formatTime";
import styles from "./save-popup.module.css";
import { useRouter } from 'next/navigation';
import { useRecoilValue } from "recoil";
import { sectionState } from "@/recoil/sectionAtom";
import { getUserInfoState } from "@/recoil/userAtom";


export async function postRecord(req) {
  try {
    const res = await fetch('/api/record',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(req),
    });

    if (!res.ok) {
      throw new Error(`Failed to save record. Status: ${res.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }

}


const SavePopup = ({setOpen, time, setTime, setStartTime}) => {
  const router = useRouter();
  const sectionofrecord = useRecoilValue(sectionState)
  
  //user
  const userInfo = useRecoilValue(getUserInfoState)

  const requestBody = {
    time:time, 
    username: userInfo.username, 
    userId :userInfo.id, 
    section:sectionofrecord
  }


    const addRecord = async() => {
      await postRecord(requestBody); 
      setOpen(false);
      setTime(0);
      setStartTime(null)
      router.push('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.sections}>
              <div className={styles.todaySections}>✨오늘의 기록✨</div>
              {sectionofrecord === 'Reading' && <h3>독서</h3>}
              {sectionofrecord === 'Study' && <h3>공부</h3>}
              {sectionofrecord === 'Workout' && <h3>운동</h3>}
              {sectionofrecord === 'Cook' && <h3>요리</h3>}
            <div className={styles.time}>{formatTimeClock(time)}</div>
            </div>
            {userInfo.username === 'guest' ? 
            <div>
              <div>If you want to save your record, Join us!</div>
              <div>
              <div>Back to Home</div>
              <div>Login</div>
              </div>
              </div> : 
            <div className={styles.btnBox}>
                <div onClick={() => setOpen(false)}
                 className={styles.btn}>cancel</div>
                <div onClick={addRecord}
                 className={styles.btn}>save</div>
            </div>
            }
        </div>
    )
}

export default SavePopup;