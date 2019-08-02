import React from 'react'
import Header from './header'
import Footer from './footer'
import MailNav from './content/mailNav'
import Advert from './content/advert'
import MailMessage from './content/mailMessage'
import MailInbox from './content/mailInbox'

import styles from './app.css'

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