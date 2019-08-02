import React from 'react'
import './mailNav.css'

export default () => (
  <nav className="mail-nav">
    <header>Folders</header>
    <ul>
      <li><a href='#'>Inbox</a></li>
      <li><a href='#'>Sent</a></li>
      <li><a href='#'>Spam</a></li>
    </ul>
  </nav>
)