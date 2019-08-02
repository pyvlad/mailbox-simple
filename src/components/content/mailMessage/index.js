import React from 'react'
import styles from './mailMessage.css'

export default () => (
  <article>
    <header className={styles['email-header']}>
      <h1>Email</h1>
      <ul className={styles["email-actions"]}>
        <li><button className={styles["email-action"]}>&#128465;</button></li>
        <li><button className={styles["email-action"]}>spam</button></li>
        <li><button className={styles["email-action"]}>send</button></li>
      </ul>
    </header>
    <section className={styles['email-meta']}>
      <p>Author (Origin)</p>
      <p>Author (Destination)</p>
      <p><time dateTime='2017-1-3 15:00-0800'>January 3rd</time></p>
      <p>Heading</p>
    </section>
    <section className={styles['email-body']}>
      <h1>Hello, world!</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
    </section>
  </article>
)
