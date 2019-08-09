import React from 'react'
import styles from './styles.css'

export default (props) => {
  const {
    handleClick
  } = props

  return (
    <button 
      className={styles['button']}
      onClick={handleClick}
    >
      New Message
    </button>
  )
}