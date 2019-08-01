import React from 'react'
import Header from './layout/header'
import Footer from './layout/footer'
import Inbox from './layout/inbox'
import Message from './layout/message'

const App = () => (
  <div className='page'>
    <Header></Header>
    {
      window.location.hash === "#message"
      ?<Message></Message>
      :<Inbox></Inbox>
    }
    <Footer></Footer>
  </div>
)

export default App