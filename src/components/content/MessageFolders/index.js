import React from 'react'
import styles from './styles.css'

export default (props) => {
  // destructure props for clearer code
  const {
    categories,
    onCategorySelect
  } = props

  return (
    <nav className={styles["mail-nav"]}>
      <header>Folders</header>
      <ul>
        {
          categories.map(
            ({id, name}) => (
              <li 
                key={id} 
                onClick={() => onCategorySelect(id)}
                className={styles["mail-nav-item"]}
              >
                <a className={styles["mail-nav-button"]}>{name}</a>
              </li>
            )
          )
        }
      </ul>
    </nav>
  )
}