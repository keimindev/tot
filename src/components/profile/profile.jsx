'use client'

import { useRecoilValue } from "recoil";
import { getUserInfoState } from "@/recoil/userAtom";
import styles from "./profile.module.css";
import Image
 from "next/image";

const Profile = () => {
  //user
  const userInfo = useRecoilValue(getUserInfoState)

 return(
    <div className={styles.container}>
    <div className={styles.profileBox}>
        <div><Image src={userInfo.image} alt="img" width={60} height={60} className={styles.profileImg}/></div>
        <h3>{userInfo.username}</h3>
    </div>
    </div>
 )   
}

export default Profile;