import React from 'react'
import styles from './styles.css'


const dateFormatted = date => (new Date(date)).toLocaleString()

export default (props) => {
  let {
    categoryName, 
    messages, 
    onMessageSelect
  } = props

  return (
    <div className={styles["mail-list"]}>
      <header>
        <h1>{categoryName}</h1>
      </header>
      <ul>
        {
          (messages.length)
          ? messages.map(
              ({id, date, from, to, title}, index) => (
                <React.Fragment key={id}>
                  <li 
                    onClick={() => onMessageSelect(id)}
                    className={styles["email-item"]}
                  >
                    <div className={styles["email-item-header"]}>
                      <p className={styles["email-item-header-path"]}>{from.name} -> {to.name}</p>
                      <p className={styles["email-item-header-date"]}>{dateFormatted(date)}</p>
                    </div>
                    <p>{title}</p>
                  </li>
                </React.Fragment>
              )
            )
          : <h2>No items in this category.</h2>
        }
      </ul>
    </div>
  )
}