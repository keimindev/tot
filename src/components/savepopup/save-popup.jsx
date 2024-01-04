'use client'

import { formatTimeClock } from "@/utils/formatTime";
import styles from "./save-popup.module.css";
import { useRouter } from 'next/navigation';

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

  const requestBody = {
    time:time, 
    username: 'min', 
    userId :1, 
    section:"Reading"
  }

    const addRecord = async() => {
      await postRecord(requestBody); 
      setOpen(false);
      setTime(0);
      setStartTime(null)
      router.refresh()
    }

    return (
        <div className={styles.container}>
            <div className={styles.section}>
            <div className={styles.cate}>Reading</div>
            <div className={styles.time}>{formatTimeClock(time)}</div>
            </div>
            <div className={styles.btnBox}>
                <div onClick={addRecord}
                 className={styles.btn}>save</div>
            </div>
        </div>
    )
}

export default SavePopup;