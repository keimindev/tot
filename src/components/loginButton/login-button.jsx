
import styles from "./login-button.module.css";
import { handleGuestLogin } from "@/lib/data";

const LoginButton = () => {
   
  return (
    <form action = {handleGuestLogin}>
    <button className={styles.guestBtn}>Browsing as a guest</button>
    </form>
  )
}

export default LoginButton