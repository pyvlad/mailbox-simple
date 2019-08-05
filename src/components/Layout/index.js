import React from 'react'
import styles from './layout.css'

export default ({
  header,
  footer,
  leftPane,
  rightPane
}) => (
  <div className={styles["page"]}>
    <header className={styles["header"]}>
      <div className={styles["header-content"]}>
        { header }
      </div>
    </header>
    <div className={styles["content"]}>
      <div className={styles["left-pane"]}>
        { leftPane }
      </div>
      <div className={styles["right-pane"]}>
        { rightPane }
      </div>
    </div>
    <footer className={styles["footer"]}>
      <div className={styles["footer-content"]}>
        { footer }
      </div>
    </footer>
  </div>
)