import {handleGithubLogin } from "@/lib/data";
import styles from './page.module.css'

const LoginPage = async () => {
    return (
        <div className={styles.container}>
            <div className={styles.loginbox}>
                <div>
                <h1 className={styles.title}>T.O.T</h1>
                <h3 className={styles.subtitle}>Trace Of Time</h3>
            </div>
            <form action = {handleGithubLogin}>
                <button className={styles.loginBtn}>Login with Github</button>
            </form>
        </div>
        </div>
    )
}

export default LoginPage;