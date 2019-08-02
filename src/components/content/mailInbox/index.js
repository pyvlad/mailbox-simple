import React from 'react'
import styles from './mailInbox.css'

export default () => (
  <div className={styles["mail-list"]}>
    <header>
      <h1>Inbox</h1>
      <p>Your incoming email messages are shown here.</p>
    </header>
    <ul>
      <li><div>Incoming Message 1</div></li>
      <li><div>Incoming Message 2</div></li>
      <li><div>Incoming Message 3</div></li>
    </ul>
  </div>
)