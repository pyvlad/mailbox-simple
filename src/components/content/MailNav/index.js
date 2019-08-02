import React from 'react'
import styles from './mailNav.css'

export default () => (
  <nav className={styles["mail-nav"]}>
    <header>Folders</header>
    <ul>
      <li><a href='#'>Inbox</a></li>
      <li><a href='#'>Sent</a></li>
      <li><a href='#'>Spam</a></li>
    </ul>
  </nav>
)