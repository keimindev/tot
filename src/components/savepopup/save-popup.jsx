'use client'

import { formatTimeClock } from "@/utils/formatTime";
import styles from "./save-popup.module.css";
import { useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from "recoil";
import { sectionState } from "@/recoil/sectionAtom";
import { userState } from "@/recoil/userAtom";
import { useEffect } from "react";

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
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    (async() => {
      const userInfo = await getUserInfo(session?.user?.email);
      setUser(userInfo)
    })()

  },[])

  const requestBody = {
    time:time, 
    username: user.username, 
    userId :user.id, 
    section:sectionofrecord
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
            <div className={styles.sections}>
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