import styles from'./noticeArea.module.css'
function NoticeArea(props) {
    return (<>
    <h2 className={styles.msg}>{props.message}</h2>
    </>  );
}

export default NoticeArea;