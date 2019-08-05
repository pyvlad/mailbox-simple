import React from 'react'
import {Fragment} from 'react'
import Layout from './Layout'
import Header from './Header'
import Footer from './Footer'
import MailNav from './content/MailNav'
import Advert from './content/Advert'
import MailMessage from './content/MailMessage'
import MailInbox from './content/MailInbox'

const App = () => {
  return (
    <Layout
      header={ <Header /> }
      footer={ <Footer /> }
      leftPane={
        <Fragment>
          <MailNav />
          <Advert />
        </Fragment>
      }
      rightPane={
        window.location.hash === "#message"
        ? <MailMessage />
        : <MailInbox />
      }
    />
  )
}

export default App