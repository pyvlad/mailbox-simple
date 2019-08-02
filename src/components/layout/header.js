import React from 'react'
import './header.css'

export default () => (
  <header>
    <div className="page-header">
      <h1 className="page-title">Simple MailBox</h1>
      <nav className="page-nav">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
        </ul>
      </nav>
    </div>
  </header>
)