import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MailNav from './content/MailNav'
import Advert from './content/Advert'
import MailMessage from './content/MailMessage'
import MailInbox from './content/MailInbox'

import styles from './App.css'

const App = () => {
  return (
    <div className={styles["page"]}>
      <header className={styles["header"]}>
        <div className={styles["header-content"]}>
          <Header></Header>
        </div>
      </header>
      <div className={styles["content"]}>
        <div className={styles["left-pane"]}>
          <MailNav></MailNav>
          <Advert></Advert>
        </div>
        <div className={styles["right-pane"]}>
            {
              window.location.hash === "#message"
              ?<MailMessage></MailMessage>
              :<MailInbox></MailInbox>
            }
        </div>
      </div>
      <footer className={styles["footer"]}>
        <div className={styles["footer-content"]}>
          <Footer></Footer>
        </div>
      </footer>
    </div>
  )
}

export default App