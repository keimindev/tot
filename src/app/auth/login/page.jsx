import {handleGithubLogin} from "@/lib/data";
import styles from './page.module.css'
import LoginButton from "@/components/loginButton/login-button";

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
            <LoginButton />
        </div>
        </div>
    )
}

export default LoginPage;