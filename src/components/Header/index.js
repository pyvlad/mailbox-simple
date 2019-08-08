import React from 'react'
import styles from './styles.css'

export default () => (
  <div className={styles["container"]}>
    <h1 className={styles["page-title"]}>Simple MailBox</h1>
    <nav className={styles["page-nav"]}>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
      </ul>
    </nav>
  </div>
)