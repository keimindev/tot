import { formatTimeClock } from "@/utils/formatTime";
import styles from "./save-popup.module.css";

export async function postRecord(req) {
  console.log('Request Body:', req);
  try {
    const res = await fetch('http://localhost:3000/api/record', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    });

    if (!res.ok) {
      throw new Error(`Failed to save record. Status: ${res.status}`);
    }

    const data = await req.json()
    return Response.json(data)
  } catch (error) {
    console.error('Error:', error);
  }

}

const SavePopup = ({setOpen, time, setTime}) => {

  const requestBody = {
    time:time, 
    username: 'min', 
    userId :1, 
    section:"Reading"
  }

    const addRecord = async() => {
      postRecord(requestBody)
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