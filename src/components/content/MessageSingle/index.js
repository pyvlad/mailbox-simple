import React from 'react'
import styles from './styles.css'


export default (props) => {
  const {
    id,
    from,
    to,
    categoryId,
    date,
    title,
    body
  } = props

  return (
    <article className={styles["container"]}>
      <header className={styles['email-header']}>
        <h1>{title}</h1>
        <ul className={styles["email-actions"]}>
          <li><button className={styles["email-action"]}>&#128465;</button></li>
          <li><button className={styles["email-action"]}>spam</button></li>
          <li><button className={styles["email-action"]}>send</button></li>
        </ul>
      </header>
      <section className={styles['email-meta']}>
        <p>FROM: {from.name}</p>
        <p>TO: {to.name}</p>
        <p><time dateTime={date}>{(new Date(date)).toLocaleString()}</time></p>
      </section>
      <section className={styles['email-body']}>
        {body}
      </section>
    </article>
  )
}
