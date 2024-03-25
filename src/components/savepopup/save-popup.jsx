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

    const backToHome = async () => {
      setOpen(false);
      setTime(0);
      setStartTime(null)
      router.push('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.sections}>
              <div className={styles.todaySections}>✨Today&apos;s Record✨</div>
              {sectionofrecord === 'Reading' && <h3>Reading</h3>}
              {sectionofrecord === 'Study' && <h3>Study</h3>}
              {sectionofrecord === 'Workout' && <h3>Workout</h3>}
              {sectionofrecord === 'Cook' && <h3>Cook</h3>}
            <div className={styles.time}>{formatTimeClock(time)}</div>
            </div>
            {userInfo.username === 'guest' ? 
            <div>
              <div className={styles.jointext}>If you want to save your record, Join us!</div>
              <div className={styles.btnBox}>
              <div className={styles.btn} onClick={backToHome}>Back to Home</div>
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