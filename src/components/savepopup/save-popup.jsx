import styles from "./save-popup.module.css";


const SavePopup = ({setOpen}) => {

    return (
        <div className={styles.container}>
            <div className={styles.section}>
            <div className={styles.cate}>Reading</div>
            <div className={styles.time}>0:40:30</div>
            </div>
            <div className={styles.btnBox}>
                <div onClick={() => setOpen(false)}
                 className={styles.btn}>save</div>
            </div>
        </div>
    )
}

export default SavePopup;