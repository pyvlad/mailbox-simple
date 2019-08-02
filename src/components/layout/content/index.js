import React from 'react'
import MailNav from './mailNav'
import Advert from './advert'
import MailMessage from './mailMessage'
import MailInbox from './mailInbox'

export default () => (
  <div className="page-content">
    <div className="left-pane">
      <MailNav></MailNav>
      <Advert></Advert>
    </div>
    <div className="right-pane">
      {
        window.location.hash === "#message"
        ?<MailMessage></MailMessage>
        :<MailInbox></MailInbox>
      }
    </div>
  </div>
)